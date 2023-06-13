import { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
import * as services from '../../services/listService';

function Home() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesNew, setMoviesNew] = useState([]);
  const [tvSeries, setTVSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const popular = await services.popularList('vi-VN', '1');
      const newMovies = await services.newMovieList('vi-VN', 1);
      const newTVSeries = await services.newTVSeries('vi-VN');
      setMoviesPopular(popular.results.slice(0, 5));
      setMoviesNew(newMovies.results.slice(0, 10));
      setTVSeries(newTVSeries.results.slice(0, 10));
      setLoading(false);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim đề cử
      </h2>
      <section className="grid grid-cols-5 gap-4">
        {loading ? (
          <MovieCardSkeleton cards={5} />
        ) : (
          moviesPopular.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_title}
              nameVi={movie.title}
              genre="movie"
            />
          ))
        )}
      </section>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 mt-8 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim lẻ mới cập nhật
      </h2>
      <section className="grid grid-cols-5 gap-[16px]">
        {loading ? (
          <MovieCardSkeleton cards={10} />
        ) : (
          moviesNew.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_title}
              nameVi={movie.title}
              genre="movie"
            />
          ))
        )}
      </section>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 mt-8 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim bộ mới cập nhật
      </h2>
      <section className="grid grid-cols-5 gap-[16px]">
        {loading ? (
          <MovieCardSkeleton cards={10} />
        ) : (
          tvSeries.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_name}
              nameVi={movie.name}
              genre="tv"
            />
          ))
        )}
      </section>
    </div>
  );
}

export default Home;
