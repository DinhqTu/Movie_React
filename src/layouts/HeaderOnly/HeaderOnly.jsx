import PropTypes from 'prop-types';

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";

function HeaderOnly({children}) {
    return <>
    <Header />
      {children}
    <Footer />
    </>;
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderOnly;