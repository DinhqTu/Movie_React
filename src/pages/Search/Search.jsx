import { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import * as services from '../../services/searchService';
import * as serviceList from '../../services/listService';
import { useDebounce } from '../../hook';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
function Search() {
  const [movies, setMovies] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const debounce = useDebounce(valueSearch, 600);
  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const data = await services.search(debounce, 'vi-VN', '1');
      const dataDefault = await serviceList.topRated('vi-VN', '1');
      const dataMovie = data?.results.filter((item) => item.media_type === 'movie');
      const dataTV = data?.results.filter((item) => item.media_type === 'tv');

      valueSearch ? setMovies(dataMovie.concat(dataTV)) : setMovies(dataDefault.results);
      setLoading(false);
    };
    fetchApi();
  }, [debounce]);
  return (
    <div className="">
      <div className="max-w-[1344px] mx-auto  ">
        <input
          onChange={(e) => setValueSearch(e.target.value)}
          value={valueSearch}
          type="text"
          className="focus:border-[#428bca] focus:shadow-boxShadow w-full h-[50px] outline-none px-[18px] text-xl mb-4 text-black rounded"
          placeholder="Nhập tên phim..."
        />
        {
          <section className="grid grid-cols-5 gap-4 ">
            {loading ? (
              <MovieCardSkeleton cards={10} />
            ) : (
              <>
                {movies?.map((movie, index) => (
                  <MovieCard
                    key={index}
                    path={`${movie.id}`}
                    image={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
                    nameEn={movie?.original_title || movie?.original_name}
                    nameVi={movie?.title || movie?.name}
                    genre={movie?.media_type || 'movie'}
                  />
                ))}
              </>
            )}
          </section>
        }
      </div>
    </div>
  );
}

export default Search;
