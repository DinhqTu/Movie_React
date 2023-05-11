import Button from "../Button/Button";
import { AiOutlineSearch } from 'react-icons/ai'

function Header() {
    return <nav className="min-h-[3.25rem] h-14 flex flex-shrink-0 bg-bgColor">
        <div className="flex items-center flex-shrink-0 min-h-[3.25rem]">
            <a className="px-3 py-2" href="/" >
                <img className="w-[112px] h-[28px] " src="https://xemphim.fun/static/skin/logo-full.png" alt="logo_brand" />
            </a>
        </div>
        <div className="flex items-center justify-between flex-grow-[1] font-medium text-white">
            <div className="flex-grow-[1]">
                <ul className="flex items-center">
                    <li><a className="px-3 py-2 flex items-center justify-center " href=""><AiOutlineSearch /> Tìm kiếm</a></li>
                    <li><a className="px-3 py-2" href="">Phim Hot</a></li>
                    <li><a className="px-3 py-2" href="">Phim Lẻ</a></li>
                    <li><a className="px-3 py-2" href="">Phim Bộ</a></li>
                    <li><a className="px-3 py-2" href="">Phim Mới</a></li>
                    <li><a className="px-3 py-2" href="">FAQ</a></li>
                </ul>
            </div>
            <div className="px-3 py-2">
                <Button small>Đăng nhập</Button>
            </div>
        </div>
    </nav>;
}

export default Header;