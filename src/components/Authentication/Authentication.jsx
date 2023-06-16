import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import config from '../../config';
import { auth } from '../../firebase';
import Button from '../Button/Button';
import WrapperUser from '../Header/WrapperUser';

function Authentication() {
  const [user, setUser] = useState('');
  const [open, setOpen] = useState(false);
  const username = JSON.parse(localStorage.getItem('username'));

  useEffect(() => {
    const checkAuth = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => {
      checkAuth();
    };
  }, []);
  return (
    <>
      {user !== null ? (
        <div
          className="h-full cursor-pointer relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="flex items-center p-2 hover:bg-[#428bca] h-full">
            <p className="mr-1">{username}</p>
            <span className="text-blue-600 text-2xl">
              <FiChevronDown />
            </span>
          </span>
          {open ? <WrapperUser /> : null}
        </div>
      ) : (
        <div className="px-3 py-2">
          <Button small>
            <Link to={config.routes.login}>Đăng nhập</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default Authentication;
