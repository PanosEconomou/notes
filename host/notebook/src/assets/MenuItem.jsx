import { motion } from 'framer-motion'
import React from 'react'
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

export default function MenuItem({ text, href }) {
    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <NavLink to={href}>{text}</NavLink>
        </motion.div>
    )
}
