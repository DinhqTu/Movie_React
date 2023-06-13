import PropTypes from 'prop-types';
import { FacebookShareButton } from 'react-share';

function MovieShare({ movieUrl, children }) {
  return (
    <>
      <FacebookShareButton url={movieUrl}>{children}</FacebookShareButton>
    </>
  );
}

MovieShare.propTypes = {
  movieUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MovieShare;
