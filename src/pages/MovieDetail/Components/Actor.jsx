import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Actor({ character, name, avatar }) {
  return (
    <div className="inline-block float-left  text-center">
      <figure className="w-[120px] h-[120px] m-[2px_auto_7.2px]">
        <Link>
          <img
            className="rounded-full w-full h-full border-2 border-transparent hover:border-2 hover:border-[#c75c0a]"
            src={`https://image.tmdb.org/t/p/w185${avatar}`}
            alt={`${name}`}
          />
        </Link>
      </figure>
      <Link>
        <p className="text-[#DBDBDB] text-sm font-medium hover:underline">{name}</p>
      </Link>
      <p className="text-[#7a7a7a] text-sm ">{character}</p>
    </div>
  );
}

Actor.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default Actor;
