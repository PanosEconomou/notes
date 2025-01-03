import React, { createContext, useContext, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const GlobalPropsContext = createContext();

export const GlobalPropsProvider = ({ children }) => {
    const DEFAULT_SIZE = 20

    const size = {
        x: useRef(DEFAULT_SIZE),
        y: useRef(DEFAULT_SIZE),
    }

    const mouse = {
        x: useMotionValue(window.innerWidth / 2),
        y: useMotionValue(-size.y.current),
    }

    const springMouse = {
        x: useSpring(mouse.x, { stiffness: 500, damping: 20, mass: 0.1 }),
        y: useSpring(mouse.y, { stiffness: 500, damping: 20, mass: 0.1 }),
    }

    return (
        <GlobalPropsContext.Provider value={{ size, mouse, springMouse, DEFAULT_SIZE }}>
            {children}
        </GlobalPropsContext.Provider>
    );
};

export const useGlobalProps = () => useContext(GlobalPropsContext);
