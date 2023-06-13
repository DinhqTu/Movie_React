import { useEffect, useState } from 'react';

import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
import MovieCard from '../../components/MovieCard/MovieCard';
import * as request from '../../services/listService';
import { default as Pagination } from '../../components/Pagination';

function NewMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const data = await request.upcoming('vi-VN', currentPage);
      setMovies(data.results);
      setPageSize(data.total_pages);
      setLoading(false);
    };
    fetchApi();
  }, [currentPage]);

  const handleCurrentPage = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {loading ? (
          <MovieCardSkeleton cards={20} />
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              path={`${movie.id}`}
              image={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
              nameEn={movie?.original_title || movie?.original_name}
              nameVi={movie?.title || movie?.name}
              genre={movie?.media_type || 'movie'}
            />
          ))
        )}
      </div>
      <Pagination pageSize={pageSize} currentPage={currentPage} handle={handleCurrentPage} />
    </>
  );
}

export default NewMovies;
