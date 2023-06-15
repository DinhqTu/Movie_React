import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SemilarMovie(props) {
  const { item, genre } = props;

  const pathname =
    genre === 'movie'
      ? item.title.toLowerCase().split(' ').join('-').replace(/:/g, '') + '~' + item.id
      : item.name.toLowerCase().split(' ').join('-').replace(/:/g, '') + '~' + item.id;
  return (
    <div className=" m-[2px_1rem_0_2px]">
      <Link to={`/${genre}/${pathname}`}>
        <img
          src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
          alt={item.title || item.name}
          className="min-h-[272px] mb-2 border border-transparent duration-300 transition-all hover:border hover:border-[#c75c0a] "
        />
      </Link>
      <Link to={`/${genre}/${pathname}`}>
        <p className="transition-all duration-300 hover:text-yellow-600">
          {item.title || item.name}
        </p>
      </Link>
    </div>
  );
}

SemilarMovie.propTypes = {
  item: PropTypes.object.isRequired,
  genre: PropTypes.string,
};

export default SemilarMovie;
