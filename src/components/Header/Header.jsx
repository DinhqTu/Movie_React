import Button from "../Button/Button";
import { AiOutlineSearch } from 'react-icons/ai'
import {Link} from 'react-router-dom'

import config from '../../config'

const NavItems = [
    {
        icon: <AiOutlineSearch /> ,
        item:'Tìm kiếm',
        path:config.routes.search
    },{
        item:'Phim Hot',
        path:config.routes.filmhot
    },{
        item:'Phim Lẻ',
        path:config.routes.movie
    },{
        item:'Phim Bộ',
        path:config.routes.series
    },{
        item:'Phim Mới',
        path:config.routes.filmnew
    },{
        item:'FAQ',
        path:config.routes.faq
    }
] 

function Header() {
    return <header className="min-h-[3.25rem] h-14 flex flex-shrink-0 bg-bgColor">
        <div className="flex items-center flex-shrink-0 min-h-[3.25rem]">
            <Link className="px-3 py-2" to={config.routes.home} >
                <img className="w-[112px] h-[28px] " src="https://xemphim.fun/static/skin/logo-full.png" alt="logo_brand" />
            </Link>
        </div>
        <div className="flex items-center justify-between flex-grow-[1] font-medium text-white">
            <div className="flex-grow-[1] h-full">
                <ul className="flex items-center h-full">
                    {
                        NavItems.map((item,index) => (
                            // <li key={index} className="hover:bg-[#428bca] h-full"><a className="px-3 py-2 flex items-center justify-center h-full " href="">{item.icon} {item.item}</a></li>
                            <li key={index} className="hover:bg-[#428bca] h-full"><Link to={item.path} className="px-3 py-2 flex items-center justify-center h-full">{item.icon} {item.item}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="px-3 py-2">
                <Button small><Link to={config.routes.login}>Đăng nhập</Link></Button>
            </div>
        </div>
    </header>;
}

export default Header;