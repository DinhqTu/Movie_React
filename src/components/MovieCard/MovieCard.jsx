import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
function MovieCard(props) {
  const { image, nameEn, nameVi, path, genre, collection, handleRemove } = props;
  const pathname = nameEn.toLowerCase().split(' ').join('-').replace(/:/g, '') + '~' + path;
  return (
    <div className="py-3 relative group">
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
      {collection ? (
        <div className="hidden flex-col items-center gap-2 absolute top-1/2 left-0 right-0 -translate-y-1/2 transition-all ease-in delay-300 group-hover:flex ">
          <Link
            to={`/${genre}/${pathname}`}
            className="flex justify-center items-center h-10 w-1/2 bg-[#DC1A28] rounded hover:bg-[#e47b82]"
          >
            Xem Phim
          </Link>
          <button
            onClick={() => handleRemove(path)}
            className="h-10 w-[70%] bg-[#4b4444] rounded hover:bg-[#846a6a]"
          >
            Xoá khỏi bộ sưu tập
          </button>
        </div>
      ) : null}
    </div>
  );
}

MovieCard.propTypes = {
  path: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameVi: PropTypes.string.isRequired,
  collection: PropTypes.bool,
  handleRemove: PropTypes.func,
};

export default MovieCard;
