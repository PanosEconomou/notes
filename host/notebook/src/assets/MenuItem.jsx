import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

export default function MenuItem({ text, href, stickTo, setCursorVariant }) {

    const stickLink = (event) => {
        stickTo.current = event.target.getBoundingClientRect();
        setCursorVariant("stuckLink");
    }

    const unstick = () => {
        setCursorVariant("default");
        stickTo.current = null;
    }


    return (
        <motion.div
            variants={variants}
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <NavLink
                className={"menuLink"}
                to={href}
                onMouseEnter={stickLink}
                onMouseLeave={unstick}
            >{text}</NavLink>
        </motion.div>
    )
}
