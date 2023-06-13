import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { auth, database } from '../../firebase';
import config from '../../config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate('');

  useEffect(() => {
    const emailUser = localStorage.getItem('email');
    const passUser = localStorage.getItem('password');
    setRememberMe(localStorage.getItem('remember') === 'true');
    setEmail(emailUser);
    setPassword(passUser);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);

      // get current user
      const user = auth.currentUser;

      // get name current user in realtime database
      const snapshot = await database.ref(`users/${user.uid}`).once('value');
      const userData = snapshot.val();
      localStorage.setItem('username', JSON.stringify(userData.name));

      // remember user
      if (rememberMe === true) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
      navigate('/');
      toast.success('Đăng nhập thành công !', {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Tài khoản hoặc mật khẩu không chính xác !', {
        autoClose: 2000,
      });
    }
  };

  const handleEventChangeCheckedBox = (e) => {
    setRememberMe(e.target.checked);
    localStorage.setItem('remember', e.target.checked);
  };

  return (
    <div className="pt-[3.25rem]">
      <section className="p-12">
        <div className="my-0 mx-auto max-w-[1344px]">
          <div className="ml-[33%] w-[33%] text-[#7a7a7a]">
            <h1 className="text-[2rem] mb-6 font-semibold">Đăng nhập</h1>
            <div className="p-[1.25rem] bg-[#363636] rounded mb-6">
              <form action="">
                <input
                  value={email || ''}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input focus:input_focus"
                  type="email"
                  name="txt-email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  value={password || ''}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input focus:input_focus"
                  type="password"
                  name="txt-password"
                  id="password"
                  placeholder="Mật khẩu"
                />
                <input
                  className="mb-3"
                  type="checkbox"
                  name="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => handleEventChangeCheckedBox(e)}
                />
                <span className="mb-3">Ghi nhớ</span>
                <button
                  onClick={handleLogin}
                  className="block w-full bg-[#3E8ED0] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#3488ce]"
                  type="submit"
                >
                  Đăng nhập
                </button>
                <div className="my-8 relative uppercase text-center border-t-2 after:content-['Hoặc'] after:text-xs after:bg-white after:py-[0.4rem] after:px-[0.8rem] after:absolute after:translate-y-[-1rem] after:translate-x-[-2rem]"></div>
              </form>
              <button
                className="block w-full bg-[#cf2122] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#c41f20]"
                type="submit"
              >
                Đăng nhập với Google
              </button>
            </div>
            <div className="text-[#428bca] float-right">
              <Link to={config.routes.signup} className="hover:text-[#dcf836] ">
                Đăng ký
              </Link>
              <Link className="ml-[22px] hover:text-[#dcf836]">Quên mật khẩu</Link>
              <Link to={config.routes.home} className="hover:text-[#dcf836] ml-[22px]">
                Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
