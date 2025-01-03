import './cursor.css'

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useGlobalProps } from './GlobalProps';

export default function Cursor({ cursorVariant, setCursorVariant, stickTo }) {
    
    const {size, mouse, springMouse, DEFAULT_SIZE } = useGlobalProps();
    
    // const size = {
    //     x: useRef(30),
    //     y: useRef(30),
    // }

    const ref = useRef(null);
    const stuck = useRef('over');
    const fraction = 1.1
    const motionRatio = 0.1

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1),
    }
    const scaleSpring = {
        x: useSpring(scale.x, { stiffness: 800, damping: 20, mass: 1 }),
        y: useSpring(scale.x, { stiffness: 800, damping: 20, mass: 1 }),
    }

    // const mouse = {
    //     x: useMotionValue(window.innerWidth / 2),
    //     y: useMotionValue(-size.y.current),
    // }

    // const springMouse = {
    //     x: useSpring(mouse.x, { stiffness: 500, damping: 25, mass: 0.5 }),
    //     y: useSpring(mouse.y, { stiffness: 500, damping: 25, mass: 0.5 }),
    // }

    const [, setRenderTrigger] = useState(0);

    const forceRerender = () => {
        setRenderTrigger(a => a + 1);
    };

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

            mouse.x.set(center.x - (fraction * stickTo.current?.width || size.x.current) / 2 + displacement.x * motionRatio);
            mouse.y.set(center.y - (fraction * stickTo.current?.height || size.y.current) * ((stuck.current === 'under') ? -0.5 : 0.5) + displacement.y * motionRatio);

            forceRerender();

        } else {
            mouse.x.set(event.clientX - size.x.current / 2);
            mouse.y.set(event.clientY - size.y.current / 2);
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
            size.x.current = 0;
            size.y.current = 0;
            break;
        case 'default':
            size.x.current = DEFAULT_SIZE;
            size.y.current = DEFAULT_SIZE;
            break;
        case 'highlight':
            size.x.current = 120;
            size.y.current = 120;
            break;
        case 'bar':
            size.x.current = 2;
            size.y.current = 30;
            break;
        case 'stuckUnder':
            stuck.current = 'under';
            break;
        case 'stuck':
        case 'stuckLink':
            stuck.current = 'over';
            break;
        default:
            size.x.current = DEFAULT_SIZE;
            size.y.current = DEFAULT_SIZE;
    }

    const variants = {
        hidden: {
            width: size.x.current,
            height: size.y.current,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        default: {
            opacity: 1,
            width: size.x.current,
            height: size.y.current,
            transition: {
                duration: 0.03,
            },

        },
        highlight: {
            opacity: 1,
            width: size.x.current,
            height: size.y.current,
        },
        stuck: {
            opacity: 1,
            width: fraction * stickTo.current?.width || size.x.current,
            height: fraction * stickTo.current?.height || size.y.current,
            borderRadius: `${Math.min(fraction * stickTo.current?.width || size.x.current, fraction * stickTo.current?.height || size.y.current)}px`,
        },
        stuckLink: {
            opacity: 1,
            width: fraction * stickTo.current?.width || size.x.current,
            height: fraction * stickTo.current?.height || size.y.current,
            borderRadius: '1px',//`${Math.min(fraction * stickTo.current?.width || size.x.current, fraction * stickTo.current?.height || size.y.current)}px`
            // backgroundColor: 'rgba(255, 99, 71, 0.5)'
            transition: {
                duration: 0.2,
            },
        },
        bar: {
            opacity: 1,
            width: size.x.current,
            height: size.y.current,
            borderRadius: '1px',
        },
        stuckUnder: {
            opacity: 1,
            width: fraction * stickTo.current?.width || size.x.current,
            height: '5px',
            borderRadius: '1px',
            transition: {
                duration: 0.1,
            },
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