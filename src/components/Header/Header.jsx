import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';

import config from '../../config';

import Authentication from '../Authentication/Authentication';

const NavItems = [
  {
    icon: <AiOutlineSearch />,
    item: 'Tìm kiếm',
    path: config.routes.search,
  },
  {
    item: 'Phim Hot',
    path: config.routes.filmhot,
  },
  {
    item: 'Phim Lẻ',
    path: config.routes.movie,
  },
  {
    item: 'Phim Bộ',
    path: config.routes.series,
  },
  {
    item: 'Sắp Ra Mắt',
    path: config.routes.upcoming,
  },
  {
    item: 'FAQ',
    path: config.routes.faq,
  },
];

function Header() {
  const [bgColor, setBgColor] = useState('transparent');
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleGetScroll = () => {
      setScrollY(window.scrollY);
      scrollY >= 55 ? setBgColor('#330C61') : setBgColor('transparent');
    };
    window.addEventListener('scroll', handleGetScroll);
    return () => window.removeEventListener('scroll', handleGetScroll);
  }, [scrollY]);

  return (
    <header
      className="min-h-[3.25rem] h-14 flex flex-shrink-0 fixed w-full z-10"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="flex items-center flex-shrink-0 min-h-[3.25rem]">
        <Link className="px-3 py-2" to={config.routes.home}>
          <img
            className="w-[112px] h-[28px] "
            src="https://xemphim.fun/static/skin/logo-full.png"
            alt="logo_brand"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between flex-grow-[1] font-medium text-white">
        <div className="flex-grow-[1] h-full">
          <ul className="flex items-center h-full">
            {NavItems.map((item, index) => (
              // <li key={index} className="hover:bg-[#428bca] h-full"><a className="px-3 py-2 flex items-center justify-center h-full " href="">{item.icon} {item.item}</a></li>
              <li key={index} className="hover:bg-[#428bca] h-full">
                <NavLink
                  to={item.path}
                  className={'px-3 py-2 flex items-center justify-center h-full'}
                  activeclassname="active"
                >
                  {item.icon} {item.item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Authentication />
      </div>
    </header>
  );
}

export default Header;
