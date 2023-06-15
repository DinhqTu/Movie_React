import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedPagination = styled(Pagination)`
  && {
    ul li button, ul li div { 
        color: white
    }

    li button:hover  {
        background-color:#428BCA;
    }

      &.Mui-selected {
        background-color: #428BCA;
      }
    }
  }
`;

function PaginationUI({ pageSize, currentPage, handle }) {
  const pagiRef = useRef(null);
  useEffect(() => {
    const offsetTop = pagiRef.current.offsetTop;
    const scrollStep = Math.ceil((offsetTop - window.pageYOffset) / 10);
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset >= offsetTop || window.pageYOffset == 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, -scrollStep);
      }
    }, 10);
  }, [currentPage]);

  return (
    <div className="flex justify-center text-white pt-8">
      <CustomizedPagination
        ref={pagiRef}
        count={pageSize}
        onChange={handle}
        size="large"
        color="secondary"
        className="text-white"
        page={currentPage}
      />
    </div>
  );
}

PaginationUI.propTypes = {
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handle: PropTypes.func.isRequired,
};

export default PaginationUI;
