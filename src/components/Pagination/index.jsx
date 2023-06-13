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
  return (
    <div className="flex justify-center text-white pt-8">
      <CustomizedPagination
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
