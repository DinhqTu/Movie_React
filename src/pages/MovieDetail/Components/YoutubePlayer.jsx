import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function YoutubePlayer({ videoKey, onChangeCloseTrailer }) {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="z-20 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(10,12,13,.8)]">
      <AiOutlineClose
        className="absolute text-white top-[4%] right-[3%] text-3xl font-extrabold cursor-pointer"
        onClick={onChangeCloseTrailer}
      />
      <YouTube videoId={videoKey} opts={opts} className=" absolute w-[1000px] h-[560px] " />
    </div>
  );
}

YoutubePlayer.propTypes = {
  videoKey: PropTypes.string.isRequired,
  onChangeCloseTrailer: PropTypes.func,
};

export default YoutubePlayer;
