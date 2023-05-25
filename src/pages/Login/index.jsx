import { Link } from "react-router-dom";

import config from "../../config";

function Login() {
    return <div className="pt-[3.25rem]">
        <section className="p-12">
            <div className="my-0 mx-auto max-w-[1344px]">
                <div className="ml-[33%] w-[33%] text-[#7a7a7a]">
                    <h1 className="text-[2rem] mb-6 font-semibold">Đăng nhập</h1>
                    <div className="p-[1.25rem] bg-[#363636] rounded mb-6">
                        <form action="" >
                            <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type="email" name="txt-email" id=""  placeholder="Email"/>
                            <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type="password" name="txt-password" id="" placeholder="Mật khẩu"/>
                            <input className="mb-3" type="checkbox" name="checkbox" id="" /> <span className="mb-3" >Ghi nhớ</span>
                            <button className="block w-full bg-[#3E8ED0] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#3488ce]" type="submit">Đăng nhập</button>
                            <div className="my-8 relative uppercase text-center border-t-2 after:content-['Hoặc'] after:text-xs after:bg-white after:py-[0.4rem] after:px-[0.8rem] after:absolute after:translate-y-[-1rem] after:translate-x-[-2rem]"></div>
                        </form> 
                        <button className="block w-full bg-[#cf2122] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#c41f20]" type="submit">Đăng nhập với Google</button>
                    </div>
                    <div className="text-[#428bca] float-right">
                        <Link to={config.routes.signup} className="hover:text-[#dcf836]">Đăng ký</Link>
                        <Link className="ml-[22px] hover:text-[#dcf836]">Quên mật khẩu</Link>
                        <Link className="ml-[22px] hover:text-[#dcf836]">Gửi lại email xác nhận</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Login;