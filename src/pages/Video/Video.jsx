import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as services from '../../services/movieDetailService';
function Video() {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  const genre = path.split('/')[2];
  const idMovie = path.split('/')[3];
  const releaseYear = movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0];
  useEffect(() => {
    const fetchApi = async () => {
      const data = await services.movieDetail(genre, idMovie, 'credits', 'vi-VN');
      setMovie(data);
    };
    fetchApi();
  }, [idMovie]);
  return (
    <div className="-mt-2 ">
      <section className="h-[614px]">
        <iframe
          id="iframe"
          // width="560"
          // height="620"
          src={`https://www.2embed.cc/embed/${idMovie}`}
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        ></iframe>
      </section>
      <div>
        <h2 className="text-4xl mt-10 mb-2">{movie.title || movie.original_name}</h2>
        <h3 className="text-xl text-[#c5c0c0]">
          {movie.original_title || movie.name} (<span className="text-cyan-600">{releaseYear}</span>)
        </h3>
      </div>
    </div>
  );
}

export default Video;
