import { motion } from "framer-motion"
import { useState, useEffect } from "react";

export default function MenuButton({ children, onClick }) {

    const [buttonState, setButtonState] = useState("hidden");

    const variants = {
        hidden: {
            y: '10vh',
            opacity: 0,
            scale: 0.5,
            transition: { ease: 'easeIn', duration: 0.5 }
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { ease: 'easeOut', duration: 0.5 }
        }
    }

    const mouseListener = (event) => {
        let yPosition = event.clientY;
        if (yPosition > window.innerHeight / 2) {
            setButtonState("visible");
        } else {
            setButtonState("hidden");
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseListener);
        return () => {
            window.removeEventListener("mousemove", mouseListener);
        }
    }, [])

    return (
        <menu
            style={{
                textAlign: "center",
                width: "100vw",
                height: "5vh",
            }}
        >

            <motion.button
                variants={variants}
                initial="hidden"
                animate={buttonState}
                onClick={onClick}
                style={{
                    position: "relative",
                    bottom: "12%",
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                }}
            >
                {children}
            </motion.button>
        </menu>
    );
}