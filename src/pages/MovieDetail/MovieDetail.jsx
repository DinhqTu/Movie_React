import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

import { Icon_Imdb, Icon_FB } from '../../components/Icons/';
import Actor from './Components/Actor';
import Carousel from './Components/Carousel';
import MovieSkeleton from './Components/MovieSkeleton';
import * as services from '../../services/movieDetailService';
import * as listService from '../../services/listService';
import Trailer from './Components/Trailer';
import YoutubePlayer from './Components/YoutubePlayer';
import SemilarMovie from './Components/SimilarMovie';

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoSimilar, setVideoSimilar] = useState([]);
  const [videoKey, setVideoKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [openTrailer, setOpenTrailer] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const genre = path.split('/')[1];
  const id = path.split('~')[1];
  const releaseYear = movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0];

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const data = await services.movieDetail(genre, id, 'credits', 'vi-VN');
      const dataVideos = await services.movieDetail(genre, id, 'videos', 'en-US');
      const dataSimilarMovie = await listService.similar(genre, id, 'vi-VN', '1');
      setVideos(dataVideos.videos.results);
      setMovie(data);
      setVideoSimilar(dataSimilarMovie);
      setLoading(false);
      // setVideoKey(dataVideos.videos.results[0].key);
    };
    fetchApi();
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
    : null;
  const writer = credits
    ? jobs?.find((job) => {
        return job.job === 'Writer';
      })
    : null;

  const handleReverseDate = (date) => {
    return date.split('-').reverse().join('-');
  };

  const handleCloseTrailer = () => {
    setOpenTrailer(false);
  };
  console.log(videoSimilar);
  return (
    <>
      {loading ? (
        <MovieSkeleton />
      ) : (
        <div className="">
          <div
            className="-z-10 bg-cover h-[600px] relative after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#020d18bf]"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            }}
          ></div>
          <section className="mt-[-320px] max-w-[1344px] m-auto ">
            <div className="flex">
              <div className="w-1/4 pr-12 py-7 flex-none">
                <img
                  src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                  alt={original_title || movie.name}
                />
                <Link className="bg-[#dd003f] flex items-center justify-center text-white mt-6  px-5 py-[9px] rounded text-xl hover:bg-[#fcbcce]">
                  <FaPlay />
                  <h3 className="uppercase ml-4">Xem phim</h3>
                </Link>
              </div>
              <div className="px-8 py-3 pt-[1.8em] mb-8 shrink grow relative">
                <h2 className="text-[40px] mb-7 font-Merriweather">
                  {original_title || movie.original_name}
                </h2>
                <h3 className="text-2xl mt-[-20px] mb-9">
                  {title || movie.name} <span className="text-[#428BCA]">({releaseYear})</span>
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
                    <span className="text-[#DBDBDB]">
                      {director?.name || director?.original_name || 'Updating ...'}
                    </span>
                  </p>
                  <p>KỊCH BẢN</p>
                  <span className="text-[#DBDBDB]">{writer?.name || 'Updating ...'}</span>
                  <p>QUỐC GIA</p>
                  <p>
                    {production_countries?.map((country, index) => (
                      <span key={index} className="text-[#DBDBDB] mr-4">
                        {country.name}
                      </span>
                    ))}
                  </p>
                  <p>KHỞI CHIẾU</p>
                  <p>
                    {
                      <span className="text-[#DBDBDB] ">
                        {release_date
                          ? handleReverseDate(release_date)
                          : handleReverseDate(movie.first_air_date)}
                      </span>
                    }
                  </p>
                </div>
                <p className="text-[#bbb8b8]">{overview}</p>
                <h3 className="uppercase font-bold mt-8 mb-[1.2rem]">Diễn viên</h3>
                <div className="w-[994px]">
                  <Carousel count={6}>
                    {credits?.cast?.map((cast) => (
                      <div key={cast.cast_id}>
                        <Actor
                          key={cast.cast_id}
                          character={cast.character}
                          name={cast.original_name}
                          avatar={cast.profile_path || 'updating...'}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <h3 className="uppercase font-bold mt-8 mb-[1.2rem]">Trailer</h3>
                <div className="w-[994px]">
                  <Carousel count={4}>
                    {videos.map((video, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setVideoKey(video.key);
                          setOpenTrailer(true);
                        }}
                      >
                        <Trailer path={video.key} name={video.name} key={index} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <h3 className="uppercase font-bold mt-8 mb-[1.2rem]">Phim tương tự</h3>
                <div className="w-[994px]">
                  <Carousel count={5}>
                    {videoSimilar.map((item, index) => (
                      <SemilarMovie item={item} key={index} genre={genre} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
          {openTrailer ? (
            <YoutubePlayer videoKey={videoKey} onChangeCloseTrailer={handleCloseTrailer} />
          ) : null}
        </div>
      )}
    </>
  );
}

export default MovieDetail;
