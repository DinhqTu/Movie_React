import { Link } from "react-router-dom";
import {FaUser,FaDonate} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {BsCollectionPlayFill} from 'react-icons/bs'
import {MdMessage} from 'react-icons/md'

import { auth } from '../../firebase'

const DropDownMenu = [
    {
        id:1,
        title: "Tài khoản",
        icon: <FaUser/>
    },
    {
        id:2,
        title: "Donate",
        icon: <FaDonate/>
    },
    {
        id:3,
        title: "Bộ sưu tập",
        icon: <BsCollectionPlayFill/>
    },
    {
        id:4,
        title: "Cặp câu song ngữ",
        icon: <MdMessage/>
    },{
        id:5,
        title: "Đăng xuất",
        icon: <FiLogOut/>,
    },
]

function WrapperUser() {
    const handleSignout = async () => {
        try {
            await auth.signOut()
            localStorage.removeItem('username')
        } catch (error) {
            console.log(error.message);
        }
    }

    return <div className="absolute py-2 w-[224px] right-0 bg-[#242424] rounded-bl-md rounded-br-md border-t-2 border-[#dbdbdb]">
        
        {DropDownMenu.map((item,index)=> (
            <Link key={index}  >
                {
                    item.id === 5 ? 
                    <div onClick={handleSignout} className="flex items-center h-[33px] px-4 py-[6px] whitespace-nowrap pr-12 hover:bg-slate-400 hover:text-black">
                        {item.icon}
                        <h3 className="ml-[1em] text-sm">{item.title}</h3>
                    </div> : 
                    <div className="flex items-center h-[33px] px-4 py-[6px] whitespace-nowrap pr-12 hover:bg-slate-400 hover:text-black">
                        {item.icon}
                        <h3 className="ml-[1em] text-sm">{item.title}</h3>
                    </div>
                }
            </Link>
        ))}
    </div> ;
}

export default WrapperUser;