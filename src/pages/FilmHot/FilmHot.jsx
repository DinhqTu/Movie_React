import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';

import * as services from '../../services/listService';
function FilmHot() {
  const [time, setTime] = useState('day');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const data = await services.trending(`${time}`, 'vi-VN');
      setData(data.results);
      setLoading(false);
    };

    fetchApi();
  }, [time]);

  return (
    <div>
      <h1 className="text-3xl uppercase text-center">Top phim được xem nhiều nhất</h1>
      <div className="flex justify-center gap-5  mt-4 bg-[#0b1e30] rounded">
        {time === 'day' ? (
          <button className="text-[#5167ca] py-3 w-1/12 border-b-2 border-[#5167ca]">NGÀY</button>
        ) : (
          <button
            className=" w-1/12 py-3 border-b-2 border-transparent "
            onClick={() => setTime('day')}
          >
            NGÀY
          </button>
        )}
        {time === 'week' ? (
          <button className="text-[#5167ca] py-3 w-1/12 border-b-2  border-[#5167ca]">TUẦN</button>
        ) : (
          <button
            className="w-1/12 py-3 border-b-2 border-transparent "
            onClick={() => setTime('week')}
          >
            TUẦN
          </button>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4">
        {loading ? (
          <MovieCardSkeleton cards={20} />
        ) : (
          data.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
              nameEn={movie?.original_title || movie?.original_name}
              nameVi={movie?.title || movie?.name}
              genre="movie"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FilmHot;
