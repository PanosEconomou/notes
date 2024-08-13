import './cursor.css'

import { useEffect, useRef, } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ cursorVariant, setCursorVariant, stickTo }) {
    const size = 30;
    const ref = useRef(null);


    const scale = useMotionValue(1);
    const scaleSpring = useSpring(scale, { stiffness: 800, damping: 20, mass: 1 });
    const mouse = {
        x: useMotionValue(window.innerWidth / 2),
        y: useMotionValue(window.innerHeight / 2),
    }

    const mouseMove = (event) => {
        if (stickTo.current !== null) {
            const center = {
                x: stickTo.current.left + stickTo.current.width / 2,
                y: stickTo.current.top + stickTo.current.height / 2,
            }

            mouse.x.set(center.x - (1.5*stickTo.current?.width || size) / 2);
            mouse.y.set(center.y - (1.5*stickTo.current?.height || size) / 2);

        } else {
            mouse.x.set(event.clientX - (ref.current?.offsetWidth || size) / 2);
            mouse.y.set(event.clientY - (ref.current?.offsetHeight || size) / 2);
        }
    };

    const springMouse = {
        x: useSpring(mouse.x, { stiffness: 300, damping: 20, mass: 0.5 }),
        y: useSpring(mouse.y, { stiffness: 300, damping: 20, mass: 0.5 }),
    }

    const mouseTapStart = () => {
        scale.set(0.8);
    }

    const mouseTapEnd = () => {
        scale.set(1);
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

    const variants = {
        hidden: {
            width: 0,
            height: 0,
        },
        default: {
            width: size,
            height: size,

        },
        highlight: {
            width: 4 * size,
            height: 4 * size,
        },
        stuck: {
            width: 1.5*stickTo.current?.width || size,
            height: 1.5*stickTo.current?.height || size,
            borderRadius: `${Math.min(1.5*stickTo.current?.width || size,1.5*stickTo.current?.height || size)}px`
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
                scale: scaleSpring,
            }}

        />
    );
}