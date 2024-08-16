import "./MainMenu.css"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MainMenu({ isOpen = 'closed' }) {

    const container = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const mouse = {
        x: useRef(window.innerWidth / 2),
        y: useRef(window.innerHeight / 2),
    }

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    const handleMouseMove = (event) => {
        mouse.x.current = event.clientX;
        mouse.y.current = event.clientY;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])


    const variants = {
        open: {
            clipPath: `circle(${dimensions.height * 2 + 200}px at ${mouse.x.current}px ${mouse.y.current}px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: `circle(0px at ${mouse.x.current}px ${mouse.y.current}px)`,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.nav id="mainMenu"
            initial={false}
            animate={isOpen}
            ref={container}
        >
            <motion.div
                className="background"
                variants={variants}
            />
        </motion.nav>
    )
}
