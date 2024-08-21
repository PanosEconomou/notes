import { motion } from "framer-motion"
import { useRef } from "react";

export default function MenuSection({ children, i = 2, text = 'A category', blur = false, setBlur }) {
    const Tag = "h" + i
    const isActive = useRef(false);

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                staggerChildren: 0.07,
                delayChildren: 0.01
            },
            filter: "blur(0px)"
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                staggerChildren: 0.05,
                staggerDirection: -1
            },
            filter: "blur(0px)"
        },
        blured: {
            y: 0,
            opacity: 0.8,
            filter: "blur(4px)"
        },
        default: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)"
        }
    }

    return (
        <motion.div className={"menuSection" + i}
            variants={variants}
            whileHover={{
                scale: i == 2 ? 1.2 : 1,
            }}
            onMouseEnter={() => {
                setBlur(true);
                isActive.current = true;
            }}
            onMouseLeave={() => {
                setBlur(false);
                isActive.current = false;
            }}
            style
        >
            <motion.div
                variants={variants}
                animate={blur && !isActive.current ? "blured" : "open"}
                style={{
                    paddingLeft: 10,
                }}
            >
                <Tag>{text}</Tag>
                {children}
            </motion.div>
        </motion.div>

    )
}
