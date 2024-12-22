import './navbar.scss';
import Sidebar from "../sidebar/Sidebar";
import ThemeToggle from "../../utils/ThemeTogggle";
import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Sidebar />
            <div className='navbar' style={theme === 'light' ? { background: "rgba(255, 255, 255, .75)" } : { background: "rgba(0, 0, 0, .75)" }}>
            <div className="tgl" style={{position:"fixed",top:25, right:50}}>
                <ThemeToggle />
            </div>

                <div className="logo">
                    <a href="/">
                        <img src={theme === 'light' ? "./siraj1.png" : "./siraj2.png"} alt="" />
                    </a>
                </div>

                <nav>

                    <div className="left">
                        <ul>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/merch">Merch</Link></li>
                            <li><Link to="/#donate">Donations</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="right">
                        <ul>
                            <li><a href="/contact">Contact</a></li>
                            {/* <li><a href="">Login</a></li> */}
                            {/* <li><a href="">Register</a></li> */}
                        </ul>
                        <ThemeToggle />
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar