import PropTypes from 'prop-types';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div className="px-12 py-20">
        <div className="max-w-[1344px] mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
