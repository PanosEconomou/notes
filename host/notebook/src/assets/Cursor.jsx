import './cursor.css'

import { useEffect, useRef, } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ cursorVariant, setCursorVariant, stickTo }) {
    const size = useRef(30);
    const ref = useRef(null);
    const fraction = 1
    const motionRatio = 0.1

    const scale = {
        x:useMotionValue(1),
        y:useMotionValue(1),
    }
    const scaleSpring = {
        x: useSpring(scale.x, { stiffness: 800, damping: 20, mass: 1 }),
        y: useSpring(scale.x, { stiffness: 800, damping: 20, mass: 1 }),
    }

    const mouse = {
        x: useMotionValue(window.innerWidth / 2),
        y: useMotionValue(-size.current),
    }

    const springMouse = {
        x: useSpring(mouse.x, { stiffness: 300, damping: 20, mass: 0.5 }),
        y: useSpring(mouse.y, { stiffness: 300, damping: 20, mass: 0.5 }),
    }

    const mouseMove = (event) => {
        if (stickTo.current !== null) {
            const center = {
                x: stickTo.current.left + stickTo.current.width / 2,
                y: stickTo.current.top + stickTo.current.height / 2,
            }

            const displacement = {
                x: event.clientX - center.x,
                y: event.clientY - center.y,
            }

            mouse.x.set(center.x - (fraction * stickTo.current?.width || size.current) / 2 + displacement.x * motionRatio);
            mouse.y.set(center.y - (fraction * stickTo.current?.height || size.current) / 2 + displacement.y * motionRatio);

        } else {
            mouse.x.set(event.clientX - size.current / 2);
            mouse.y.set(event.clientY - size.current / 2);
        }
    }

    const mouseTapStart = () => {
        scale.x.set(0.8);
        scale.y.set(0.8);
    }

    const mouseTapEnd = () => {
        scale.x.set(1);
        scale.y.set(1);
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mousedown', mouseTapStart);
        window.addEventListener('mouseup', mouseTapEnd);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mousedown', mouseTapStart);
            window.removeEventListener('mouseup', mouseTapEnd);
        }
    }, [])


    switch (cursorVariant) {
        case 'hidden':
            size.current = 0;
            break;
        case 'default':
            size.current = 30;
            break;
        case 'highlight':
            size.current = 120;
            break;
        default: size.current = 30;
    }

    const variants = {
        hidden: {
            width: size.current,
            height: size.current,
        },
        default: {
            width: size.current,
            height: size.current,

        },
        highlight: {
            width: size.current,
            height: size.current,
        },
        stuck: {
            width: fraction * stickTo.current?.width || size.current,
            height: fraction * stickTo.current?.height || size.current,
            borderRadius: `${Math.min(fraction * stickTo.current?.width || size.current, fraction * stickTo.current?.height || size.current)}px`
        }
    }


    return (
        <motion.div
            ref={ref}
            className="cursor"
            variants={variants}
            initial="hidden"
            animate={cursorVariant}
            whileTap={{ scale: 0.8 }}
            style={{
                x: springMouse.x,
                y: springMouse.y,
                scaleX: scaleSpring.x,
                scaleY: scaleSpring.y,
            }}

        />
    );
}