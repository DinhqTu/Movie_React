import { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';

function Home() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesNew, setMoviesNew] = useState([]);
  const [tvSeries, setTVSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E4ZWI3MDhiZTEwMWNjYzE5OTk4MGZmZTdiODE1OSIsInN1YiI6IjY0NjUwYzQwNDRhNDI0MDBlNGI4NTA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRdHQVVuVfqQl6BFA1SWgbKLh5DyRzEec12zAfmUHwk',
    },
  };
  const fetchAPI = async () => {
    const [res1, res2, res3] = await Promise.all([
      fetch('https://api.themoviedb.org/3/trending/movie/week?language=vi-VN', options),
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=vi-VN&page=1', options),
      fetch('https://api.themoviedb.org/3/tv/popular?language=vi-VN&page=1', options),
    ]);
    const data1 = await res1.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    setMoviesPopular(data1.results);
    setMoviesNew(data2.results);
    setTVSeries(data3.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const MoviePopular = moviesPopular.slice(0, 5);
  const MoviesNew = moviesNew.slice(0, 10);
  const TVSeries = tvSeries.slice(0, 10);
  return (
    <div>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim đề cử
      </h2>
      <section className="grid grid-cols-5 gap-[16px]">
        {loading && <MovieCardSkeleton cards={5} />}
        {!loading &&
          MoviePopular.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_title}
              nameVi={movie.title}
            />
          ))}
      </section>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 mt-8 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim lẻ mới cập nhật
      </h2>
      <section className="grid grid-cols-5 gap-[16px]">
        {loading && <MovieCardSkeleton cards={10} />}
        {!loading &&
          MoviesNew.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_title}
              nameVi={movie.title}
            />
          ))}
      </section>
      <h2 className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 mt-8 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">
        phim bộ mới cập nhật
      </h2>
      <section className="grid grid-cols-5 gap-[16px]">
        {loading && <MovieCardSkeleton cards={10} />}
        {!loading &&
          TVSeries.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_name}
              nameVi={movie.name}
            />
          ))}
      </section>
    </div>
  );
}

export default Home;
