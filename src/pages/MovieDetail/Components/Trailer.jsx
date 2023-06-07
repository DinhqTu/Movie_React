import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

function Trailer({ path, name }) {
  return (
    <div className="inline-block float-left  text-center w-[248px] h-[132px] ">
      <figure className="w-auto h-[126px] m-[2px_1.5rem_0_2px] relative group">
        <Link>
          <img
            className=" w-full h-full object-cover border-2 border-transparent hover:border-2 group-hover:border-[#c75c0a] hoverPlay::before"
            src={`https://img.youtube.com/vi/${path}/0.jpg`}
            alt={`${name}`}
          />
        </Link>
        <FaPlay className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:flex" />
      </figure>
    </div>
  );
}

Trailer.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string,
};
export default Trailer;
