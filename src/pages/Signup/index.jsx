import {Link } from 'react-router-dom'
import config from '../../config'

function Signup() {
    return <div className="pt-[3.25rem]">
    <section className="p-12">
        <div className="my-0 mx-auto max-w-[1344px]">
            <div className="ml-[33%] w-[33%] text-[#7a7a7a]">
                <h1 className="text-[2rem] mb-6 font-semibold">Đăng ký</h1>
                <div className="p-[1.25rem] bg-[#363636] rounded mb-6">
                    <form action="" >
                        <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type='text' name="txt-email" id=""  placeholder="Mã giới thiệu"/>
                        <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type="email" name="txt-password" id="" placeholder="Email"/>
                        <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type="text" name="txt-password" id="" placeholder="Tên bạn"/>
                        <input className="mb-[0.75rem] block w-full text-2xl p-4 h-[60px] rounded outline-none focus:input_focus" type="password" name="txt-password" id="" placeholder="Mật khẩu"/>
                        <button className="block w-full bg-[#3E8ED0] text-white px-[24px] h-[60px] text-2xl rounded hover:bg-[#3488ce]" type="submit">Đăng ký</button>
                    </form> 
                </div>
                <div className="text-[#428bca] float-right">
                    <Link to={config.routes.login} className="hover:text-[#dcf836]">Đăng nhập</Link>
                </div>
            </div>
        </div>
    </section>
</div>;
}

export default Signup;