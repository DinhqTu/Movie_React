import PropTypes from 'prop-types';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/Navbar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="px-12 py-20">
        <div className="max-w-[1344px] mx-auto  ">
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
