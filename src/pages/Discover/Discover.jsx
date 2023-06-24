import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
import * as services from '../../services/listService';
import { default as Pagination } from '../../components/Pagination';

function Discover() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  const genre = searchParams.get('genre');
  const country = searchParams.get('country');
  const year = searchParams.get('year');
  const time = searchParams.get('time');
  const arrange = searchParams.get('arrange');

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const data = await services.discover(
        type,
        genre,
        country,
        year,
        time,
        arrange,
        'vi-VN',
        currentPage,
      );
      setData(data.results);
      setPageSize(data.total_pages);
      setLoading(false);
    };

    fetchApi();
  }, [type, genre, country, year, time, arrange]);

  const handleCurrentPage = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <section className="grid grid-cols-5 gap-4">
        {loading ? (
          <MovieCardSkeleton cards={20} />
        ) : (
          data?.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              nameEn={movie.original_title || movie.original_name}
              nameVi={movie.title || movie.name}
              genre={type}
            />
          ))
        )}
      </section>
      <Pagination pageSize={pageSize} currentPage={currentPage} handle={handleCurrentPage} />
    </div>
  );
}

export default Discover;
