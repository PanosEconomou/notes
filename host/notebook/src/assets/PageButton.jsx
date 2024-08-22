import { motion } from "framer-motion"
import { useState, useEffect } from "react";

export default function PageButton({ children, onClick, onMouseEnter, onMouseExit }) {

    const [buttonState, setButtonState] = useState("hidden");

    const variants = {
        hidden: {
            x: '-10vw',
            opacity: 0,
            scale: 0.5,
            // transition: { ease: 'easeIn', duration: 0.5 }
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            // transition: { ease: 'easeOut', duration: 0.5 }
        }
    }

    const mouseListener = (event) => {
        let xPosition = event.clientX;
        if (xPosition < window.innerWidth * .4) {
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
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 0,
                float: "left",
                width: "70px",
                height: "100vh",
                display: "flex",
                lignItems: "center",
            }}
        >

            <motion.button
                variants={variants}
                initial="hidden"
                animate={buttonState}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                style={{
                    textAlign: "center",
                    position: "relative",
                    left: "70px",
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    backgroundColor: 'rgba(255,255,255,0)',
                }}
            >
                {children}
            </motion.button>
        </menu >
    );
}