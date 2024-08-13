import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Magnetic({ children, motionRatio = 0.1 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const handleMouse = (event) => {
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = event.clientX - (left + width / 2)
        const middleY = event.clientY - (top + height / 2)
        setPosition({ x: middleX * motionRatio, y: middleY * motionRatio })
    }

    const reset = () => {
        setPosition({
            x: 0,
            y: 0
        })
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{
                x,
                y
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
                mass: 0.5
            }}
        >
            {children}
        </motion.div>
    )
}