import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import { database } from '../../firebase';
import * as service from '../../services/movieDetailService';

function Collection() {
  const navigate = useNavigate();
  const isAuth = JSON.parse(localStorage.getItem('accessToken'));
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // kiểm tra xem user đã login chưa
    if (!isAuth) {
      navigate('/login');
    }

    // lấy id phim trong collection
    const handleCollection = async () => {
      const collection = [];
      await database
        .ref(`collection/${isAuth}`)
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((value) => {
            const childData = value.val();
            collection.push(childData);
          });
        });

      // call api movie
      const promise = collection.map((item) => {
        return service.movieDetail(item.type, item.id, 'vi-VN');
      });
      const data = await Promise.all(promise);
      setMovies(data);
    };

    if (isAuth) {
      handleCollection();
    }
  }, [isAuth]);

  return (
    <div>
      <h2 className="text-3xl text-center pb-4">Bộ sưu tập phim của bạn</h2>
      <section className="grid grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            path={`${movie.id}`}
            image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            nameEn={movie.original_title || movie.original_name}
            nameVi={movie.title || movie.name}
            genre={movie.title ? 'movie' : 'tv'}
          />
        ))}
      </section>
    </div>
  );
}

export default Collection;
