import './cursor.css'

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ cursorVariant }) {
    let size = 30;
    const mouse = {
        x: useMotionValue(window.innerWidth / 2),
        y: useMotionValue(window.innerHeight / 2),
    }

    const mouseMove = (event) => {
        mouse.x.set(event.clientX - size / 2);
        mouse.y.set(event.clientY - size / 2);
    };

    const springMouse = {
        x: useSpring(mouse.x, { stiffness: 300, damping: 20, mass: 0.5 }),
        y: useSpring(mouse.y, { stiffness: 300, damping: 20, mass: 0.5 }),
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    const variants = {
        hidden: {
            scale: 0,
        },
        default: {
            scale: 1,
            
        },
        highlight: {
            scale: 3,
        }
    }

    return (
        <motion.div
            className="cursor"
            variants={variants}
            initial="hidden"
            animate={cursorVariant}
            whileTap="tap"
            style={{
                x: springMouse.x,
                y: springMouse.y,
                height: size,
                width: size,
            }}

        />
    );
}