import './hero.scss';
import Navbar from "../navbar/Navbar";
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';

const Hero = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Navbar />
            <div className='hero'>

                <div className="text">
                    <h1>
                        Make Your <span>Impact.</span>
                    </h1>
                    <p>
                        Create lasting change by helping communities grow and thrive. Your support makes a difference every step of the way.
                    </p>
                </div>

                <div className="image">
                    <div>
                        <img src={theme === 'light' ? "./siraj2.png" : "./siraj1.png"} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero