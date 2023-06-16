import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
function MovieCard(props) {
  const { image, nameEn, nameVi, path, genre } = props;
  const pathname = nameEn.toLowerCase().split(' ').join('-').replace(/:/g, '') + '~' + path;
  return (
    <div className="py-3 group">
      <div className="relative w-[256px] h-[384px]  overflow-hidden ">
        <Link
          className="absolute  top-0 left-0 w-full h-full scale-100 "
          to={`/${genre}/${pathname}`}
        >
          <img
            src={image}
            alt={nameEn}
            className=" w-full h-full transition-transform hover:scale-110"
          />
        </Link>
      </div>
      <Link to={`/${genre}/${pathname}`}>
        <p className="mt-[6px] overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-rose-700">
          {nameVi}{' '}
        </p>
      </Link>
      <Link to={`/${genre}/${pathname}`}>
        <p className="text-[#7A7A7A]  overflow-hidden text-ellipsis whitespace-nowrap ">{nameEn}</p>
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  path: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameVi: PropTypes.string.isRequired,
};

export default MovieCard;
