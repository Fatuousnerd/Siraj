import ThemeToggle from '../../utils/ThemeTogggle'
import { Link } from 'react-router-dom'
import { Assessment, AttachMoney, Campaign, HomeRounded } from "@mui/icons-material"
import Logoutbtn from '../auth/Logout'
import CheckAuth from '../auth/checkAuth';

const Sidebar = () => {
    CheckAuth()
    return (
        <>
            <div className='h-[100vh] fixed w-[260px] bg-[--SecBgColor] px-5 gap-5 flex flex-col justify-around '>
                <div className="flex h-[60px] bg-red-500 "></div>
                <div className="w-full flex flex-col gap-5">
                    <Link to="/admin/dashboard" className='flex items-center gap-3'><HomeRounded /> Dashboard</Link>
                    <Link to="/admin/campaign" className='flex items-center gap-3'><Campaign /> Campaigns</Link>
                    <Link to="" className='flex items-center gap-3'><AttachMoney /> Finances</Link>
                    <Link to="" className='flex items-center gap-3'><Assessment /> Analytics</Link>
                    <Link to="" className='flex items-center gap-3'><HomeRounded /> Dashboard</Link>
                    <Link to="" className='flex items-center gap-3'><HomeRounded /> Dashboard</Link>
                </div>
                <div className="flex flex-col gap-5 justify-center">
                    <Link to="/admin/dashboard" className='flex justify-center'><HomeRounded /></Link>
                    <ThemeToggle />
                    <Logoutbtn />
                </div>
            </div>
        </>
    )
}

export default Sidebar