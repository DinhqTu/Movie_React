import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaPlay } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

import { Icon_Imdb, Icon_FB } from '../../components/Icons/';
import Actor from './Components/Actor';
import Carousel from './Components/Carousel';
import MovieSkeleton from './Components/MovieSkeleton';

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('~')[1];
  const releaseYear = movie.release_date?.split('-')[0];

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E4ZWI3MDhiZTEwMWNjYzE5OTk4MGZmZTdiODE1OSIsInN1YiI6IjY0NjUwYzQwNDRhNDI0MDBlNGI4NTA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRdHQVVuVfqQl6BFA1SWgbKLh5DyRzEec12zAfmUHwk',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=vi-VN`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const {
    credits,
    runtime,
    genres,
    title,
    original_title,
    poster_path,
    release_date,
    vote_average,
    production_countries,
    overview,
  } = movie;

  const handleGetRunTime = (time) => {
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    return hour + ' giờ ' + minute + ' phút';
  };

  const time = runtime ? handleGetRunTime(runtime) : '';

  const handleGetNameGenres = (genres) => {
    const name = genres.replace('Phim', '').trim();
    return name;
  };

  const jobs = credits?.crew?.map((crew) => crew);
  const director = credits
    ? jobs.find((job) => {
        return job.job === 'Director';
      })
    : '';
  const writer = credits
    ? jobs?.find((job) => {
        return job.job === 'Writer';
      })
    : '';

  const handleReverseDate = (date) => {
    return date.split('-').reverse().join('-');
  };

  return (
    <>
      {loading ? (
        <MovieSkeleton />
      ) : (
        <div className="">
          <div
            className="-z-10 bg-cover bg-center h-[600px] relative after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#020d18bf]"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            }}
          ></div>
          <section className="mt-[-360px] max-w-[1344px] m-auto ">
            <div className="flex">
              <div className="w-1/4 pr-8 py-3 flex-none">
                <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={original_title} />
                <Link className="bg-[#dd003f] flex items-center justify-center text-white mt-6  px-5 py-[9px] rounded text-xl hover:bg-[#fcbcce]">
                  <FaPlay />
                  <h3 className="uppercase ml-4">Xem phim</h3>
                </Link>
              </div>
              <div className="px-8 py-3 pt-[1.8em] shrink grow">
                <h2 className="text-[40px] mb-7 font-Merriweather">{original_title}</h2>
                <h3 className="text-2xl mt-[-20px] mb-9">
                  {title} <span className="text-[#428BCA]">({releaseYear})</span>
                </h3>
                <p className="mb-4 font-semibold">{time}</p>
                <span className="flex items-center gap-2 font-semibold mb-4 ">
                  <Icon_Imdb />
                  {vote_average?.toFixed(1)}
                </span>
                <div className="flex items-center justify-between mb-14">
                  <div className="flex gap-3">
                    <Link className=" flex items-center py-[7px] px-4 bg-[#485fc7] gap-3 rounded hover:bg-[#062093]">
                      <Icon_FB className="w-5 h-5" />
                      <p>Chia sẻ</p>
                    </Link>
                    <Link className=" flex items-center py-[7px] px-4 text-[#485fc7] bg-transparent gap-3 rounded border border-[#485fc7] hover:text-white hover:bg-[#485fc7]">
                      <AiOutlinePlus />
                      <p>Bộ sưu tập</p>
                    </Link>
                  </div>
                  <div>
                    {genres?.map((genre) => (
                      <Link
                        key={genre.id}
                        className="text-xs mb-2 mr-2 py-[5px] px-[15px] border rounded-full hover:bg-white hover:text-[#485fc7]"
                      >
                        {handleGetNameGenres(genre.name)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-[12%_50%] gap-y-1 text-[#7a7a7a] font-semibold mb-6">
                  <p>ĐẠO DIỄN</p>
                  <p>
                    <span key={director.id} className="text-[#DBDBDB]">
                      {director.name}
                    </span>
                  </p>
                  <p>KỊCH BẢN</p>
                  <span className="text-[#DBDBDB]">{writer?.name || 'Updating ...'}</span>
                  <p>QUỐC GIA</p>
                  <p>
                    {production_countries?.map((country) => (
                      <span key={country.id} className="text-[#DBDBDB] mr-4">
                        {country.name}
                      </span>
                    ))}
                  </p>
                  <p>KHỞI CHIẾU</p>
                  <p>
                    {
                      <span className="text-[#DBDBDB] ">
                        {release_date ? handleReverseDate(release_date) : ''}
                      </span>
                    }
                  </p>
                </div>
                <p className="text-[#bbb8b8]">{overview}</p>
                <h2 className="uppercase font-bold mt-8 mb-[1.2rem]">Diễn viên</h2>
                <div className="w-[994px]">
                  <Carousel setting>
                    {credits?.cast?.map((cast) => (
                      <div key={cast.cast_id}>
                        <Actor
                          key={cast.cast_id}
                          character={cast.character}
                          name={cast.original_name}
                          avatar={cast.profile_path}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
