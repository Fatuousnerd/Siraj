import { Logout } from '@mui/icons-material';
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';

const Logoutbtn = () => {
    const {setUser} = useContext(UserContext)
    const Navigate = useNavigate()
    const handleLogout = () => {
        setUser(null); // Clear user data in state
        localStorage.removeItem("user"); // Clear local storage
        Navigate("/auth/login")
    };
    return (
        <>
            <button onClick={handleLogout} className='hover:text-current'>
                <Logout />
            </button>
        </>
    )
}

export default Logoutbtn