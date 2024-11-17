import { motion, useMotionValueEvent, useMotionTemplate, useMotionValue, complex } from "framer-motion"
import { useRef } from "react";
import { useGlobalProps } from './GlobalProps';

export default function MenuSection({ children, i = 2, text = 'A category', blur = false, setBlur }) {
    const Tag = "h" + i
    const isActive = useRef(false);
    const compRef = useRef(null)
    const { size, mouse, springMouse } = useGlobalProps();
    const innerMousePos = {
        x: useMotionValue(springMouse.x.current),
        y: useMotionValue(springMouse.x.current),
    }

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                staggerChildren: 0.07,
                delayChildren: 0.01
            },
            // filter: "blur(0px)",
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                staggerChildren: 0.05,
                staggerDirection: -1
            },
            // filter: "blur(0px)",
        },
        blured: {
            y: 0,
            opacity: 0.8,
            // filter: "blur(4px)"
        },
        default: {
            y: 0,
            opacity: 1,
            // filter: "blur(0px)"
        }
    }
    const rect = compRef.current?.getBoundingClientRect();

    useMotionValueEvent(springMouse.x, "change", () => {
        if(isActive.current) innerMousePos.x.set(springMouse.x.get() - rect.left)
    })

    useMotionValueEvent(springMouse.y, "change", () => {
        if(isActive.current) innerMousePos.y.set(springMouse.y.get() - rect.top)
    })

    const bg = useMotionTemplate`radial-gradient(96.61% 106.15% at ${innerMousePos.x}px ${innerMousePos.y}px, rgba(194, 223, 243, 0.60) 0%, rgba(252, 252, 252, 0.24) 100%)`
    // const bg = useMotionTemplate`radial-gradient(96.61% 106.15% at ${innerMousePos.x}px ${innerMousePos.y}px, rgba(243, 200, 217, 0.60) 0%, rgba(252, 252, 252, 0.24) 100%)`

    return (
        <motion.div
            className={"menuSection" + i}
            ref={compRef}
            variants={variants}
            whileHover={i == 2 ? {
                scale: 1.1,
            } : {
                scale: 1,
            }}
            onMouseEnter={() => {
                setBlur(true);
                isActive.current = true;
            }}
            onMouseLeave={() => {
                setBlur(false);
                isActive.current = false;
            }}
            style={i == 2 ? {
                background:  isActive.current? bg : "rgba(252, 252, 252, 0.40)"
            } : {}}
        >
            <motion.div
                className={"menuInside" + i}
                variants={variants}
                animate={blur && !isActive.current ? "blured" : "open"}
            >
                <Tag>{text}</Tag>
                {children}
            </motion.div>
        </motion.div>

    )
}
