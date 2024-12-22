import { motion } from "framer-motion";
import ThemeToggle from "../../../utils/ThemeTogggle";

const variants = {
    open: {
        transition: {
            staggerChildren: .1,
        },
    },
    closed: {
        transition: {
            staggerChildren: .05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {




    return (
        <>
            <motion.div className="links" variants={variants}>
                <ul>
                    <motion.a href="/#about" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>About</motion.a>
                    <motion.a href="/merch" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>Merch</motion.a>
                    <motion.a href="/#donate" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>Donations</motion.a>
                    <motion.a href="/faqs" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>FAQs</motion.a>
                    <motion.a href="/contact" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>Contact</motion.a>
                </ul>
                {/* <motion.div className="tgl" variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                    <ThemeToggle />
                </motion.div> */}
            </motion.div>
        </>
    )
}

export default Links