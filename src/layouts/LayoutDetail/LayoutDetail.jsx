import PropTypes from 'prop-types';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

function LayoutDetail({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

LayoutDetail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutDetail;
