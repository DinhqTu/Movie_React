import PropTypes from 'prop-types';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/Navbar';

function DefaultLayout({ children }) {
  const handleScrollToTop = () => {
    const scrollStep = (2700 - window.pageYOffset) / 10;
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset == 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, -scrollStep);
      }
    }, 10);
  };
  return (
    <>
      <Header />
      <div className="px-12 py-20">
        <div className="max-w-[1344px] mx-auto  ">
          <Navbar />
          {children}
        </div>
      </div>
      <BsFillArrowUpCircleFill
        onClick={handleScrollToTop}
        className="fixed text-3xl bottom-[5%] right-[3%] cursor-pointer hover:text-gray-500"
      />
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
