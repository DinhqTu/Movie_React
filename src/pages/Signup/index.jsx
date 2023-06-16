import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { auth, database } from '../../firebase';
import config from '../../config';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordConfirm) {
        const useCredential = await auth.createUserWithEmailAndPassword(email, password);
        const { user } = useCredential;
        // lưu thông tin người dùng vào database
        await database.ref(`users/${user.uid}`).set({
          email: user.email,
          name: name,
        });
        navigate(config.routes.login);
        toast.success('Đăng ký tài khoản thành công !', {
          autoClose: 2000,
        });
      } else {
        toast.warning('Mật khẩu không trùng khớp !', {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.warning(error.message, {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="pt-[3.25rem] ">
      <section className="p-12">
        <div className="my-0 mx-auto max-w-[1344px]">
          <div className="ml-[33%] w-[33%] text-[#7a7a7a]">
            <h1 className="text-[2rem] mb-6 font-semibold">Đăng ký</h1>
            <div className="p-[1.25rem] bg-[#363636] rounded mb-6">
              <form action="">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input focus:input_focus"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  className="input focus:input_focus"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tên bạn"
                />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input focus:input_focus"
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Mật khẩu"
                />
                <input
                  value={passwordConfirm}
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                  className="input focus:input_focus"
                  type="password"
                  name="password_confirm"
                  id="re-passs"
                  placeholder="Nhập lại mật khẩu"
                />
                <button
                  onClick={handleRegister}
                  className="block w-full bg-[#3E8ED0] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#3488ce]"
                  type="submit"
                >
                  Đăng ký
                </button>
              </form>
            </div>
            <div className="text-[#428bca] float-right">
              <Link to={config.routes.login} className="hover:text-[#dcf836]">
                Đăng nhập
              </Link>
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

export default Signup;
