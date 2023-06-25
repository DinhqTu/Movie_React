import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Forgot(props) {
  const { handleResetPassword } = props;
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p onClick={handleOpen}>Quên mật khẩu</p>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center text-black ">
          <h2 className="px-4 text-[#3e8ed0] font-semibold " id="keep-mounted-modal-title">
            Nhập địa chỉ email của bạn
          </h2>
          <input
            className="border-2 px-2 rounded h-10  w-full border-[#3e8ed0] my-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
          <button
            onClick={() => handleResetPassword(email)}
            className="bg-[#3e8ed0] rounded text-white w-1/2 h-8 cursor-pointer hover:bg-[#87b8e1]"
          >
            Lấy lại mật khẩu
          </button>
        </Box>
      </Modal>
    </div>
  );
}

Forgot.propTypes = {
  handleResetPassword: PropTypes.func,
};
