import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
function MovieCard({ image, nameEn, nameVi, path }) {
  const pathname = nameEn.toLowerCase().split(' ').join('-').replace(/:/g, '') + '~' + path;
  return (
    <div className="py-3">
      <Link to={`/${pathname}`}>
        <img src={image} alt={nameEn} className="h-[384px]" />
      </Link>
      <Link to={`/${pathname}`}>
        <p className="mt-[6px] overflow-hidden text-ellipsis whitespace-nowrap ">{nameVi} </p>
      </Link>
      <Link to={`/${pathname}`}>
        <p className="text-[#7A7A7A]  overflow-hidden text-ellipsis whitespace-nowrap ">{nameEn}</p>
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameVi: PropTypes.string.isRequired,
};

export default MovieCard;
