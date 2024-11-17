import "./MainMenu.css"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

export default function MainMenu({ isOpen = 'closed', setIsOpen, stickTo, setCursorVariant }) {

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const container = useRef(null);

    const handleWheel = (event) => {
        event.preventDefault(); 
        console.log(event);
        if (!container.current) return;

        const scrollAmount = event.deltaY*100;
        if (scrollAmount == 0) return;
        
        container.current.scrollTo({
            left: container.current.scrollLeft + scrollAmount,
            behavior: "auto"
        });

        console.log(scrollAmount);
    }

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
        // container.current.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            // if (container.current) container.current.removeEventListener('wheel', handleWheel);
        }
    }, [])


    const variants = {
        open: {
            clipPath: `circle(${dimensions.height * 2 + 200}px at ${window.innerWidth * 0.5}px ${window.innerHeight * 0.1}px)`,
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

    const titleVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                y: { stiffness: 1000, velocity: -100 },
                staggerChildren: 0.07,
                delayChildren: 0.01
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    return (
        <motion.nav id="mainMenu"
            ref={container}
            initial={false}
            animate={isOpen}
            onClick={() => {
                setIsOpen('closed');
            }}
            style={{
                pointerEvents: (isOpen === "open") ? "auto" : "none"
            }}
        >
            <motion.div
                className="background"
                variants={variants}
            />

            {/* <motion.h1
                className="title"
                variants={titleVariants}
            ><NavLink to="/">Notebook</NavLink></motion.h1> */}

            <Navigation stickTo={stickTo} setCursorVariant={setCursorVariant} />
        </motion.nav >
    )
}
