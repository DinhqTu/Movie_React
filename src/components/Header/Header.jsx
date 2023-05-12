import Button from "../Button/Button";
import { AiOutlineSearch } from 'react-icons/ai'

const NavItems = [
    {
        icon: <AiOutlineSearch /> ,
        item:'Tìm kiếm'
    },{
        item:'Phim Hot'
    },{
        item:'Phim Lẻ'
    },{
        item:'Phim Bộ'
    },{
        item:'Phim Mới'
    },{
        item:'FAQ'
    }
] 

function Header() {
    return <header className="min-h-[3.25rem] h-14 flex flex-shrink-0 bg-bgColor">
        <div className="flex items-center flex-shrink-0 min-h-[3.25rem]">
            <a className="px-3 py-2" href="/" >
                <img className="w-[112px] h-[28px] " src="https://xemphim.fun/static/skin/logo-full.png" alt="logo_brand" />
            </a>
        </div>
        <div className="flex items-center justify-between flex-grow-[1] font-medium text-white">
            <div className="flex-grow-[1] h-full">
                <ul className="flex items-center h-full">
                    {
                        NavItems.map((item,index) => (
                            <li key={index} className="hover:bg-[#428bca] h-full"><a className="px-3 py-2 flex items-center justify-center h-full " href="">{item.icon} {item.item}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="px-3 py-2">
                <Button small>Đăng nhập</Button>
            </div>
        </div>
    </header>;
}

export default Header;