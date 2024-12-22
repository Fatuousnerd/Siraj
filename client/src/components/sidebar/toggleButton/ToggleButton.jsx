import { motion } from "framer-motion";
import { ThemeContext } from "../../../utils/ThemeContext";
import { useContext } from "react";

const ToggleButton = ({ setOpen }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={()=>setOpen((prev)=>!prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" stroke={theme === 'light' ? "rgba(0, 0, 0, .75)"  : "rgba(255, 255, 255, .75)" } strokeLinecap="round" variants={{closed:{d: "M 2 2.5 L 20 2.5"}, open:{d: "M 3 16.5 L 17 2.5"},}}/>
                <motion.path strokeWidth="3" stroke={theme === 'light' ? "rgba(0, 0, 0, .75)"  : "rgba(255, 255, 255, .75)" } strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{closed: {opacity: 1}, open: {opacity: 0}}}/>
                <motion.path strokeWidth="3" stroke={theme === 'light' ? "rgba(0, 0, 0, .75)"  : "rgba(255, 255, 255, .75)" } strokeLinecap="round" variants={{closed:{d: "M 2 16.346 L 20 16.346"}, open:{d: "M 3 2.5 L 17 16.346"},}}/>
            </svg>
        </button>
    )
}

export default ToggleButton