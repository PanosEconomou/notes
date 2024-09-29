import { motion, useAnimate, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

function createNestedObject(array) {
    const result = {};

    array.forEach(path => {
        const parts = path.split('/');
        let current = result;

        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = (index === parts.length - 1) ? null : {};
            }
            current = current[part];
        });
    });

    return result;
}

export default function Navigation({ stickTo, setCursorVariant }) {

    const [files, setFiles] = useState([]);
    const [blur, setBlur] = useState(false);
    const [divRef, animate] = useAnimate();
    const [move, setMove] = useState({ offset: 0, strength: 100 });

    const handleMouseMove = (event) => {
        const epsilon = 10;
        const pos = event.clientX - window.innerWidth / 2


        const offset = - (window.innerWidth / 2) * (pos > 0 ? 1 : 0);
        const strength = Math.abs(pos);
        animate(divRef.current, { x: offset }, { type: "spring", velocity: strength, damping: 1, mass: 1})
        console.log(pos);
        // setMove({ offset: offset, strength: strength });
    };

    const handleMouseLeave = () => {
        setMove({ offset: 0, strength: 100 });
    };

    const fetchFiles = () => {
        fetch("./NOTES/directory_listing.txt")
            .then((res) => res.text())
            .then(data => data.split('\n')
                .filter(Boolean)
                .filter((item) => item.endsWith(".md") && !item.endsWith("README.md")))
            .then((data) => {
                createNestedObject(data);
                return data;
            })
            .then((data) => setFiles(createNestedObject(data)));
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    const renderMenu = (obj, path = '', depth = 2) => {
        return Object.entries(obj).map(([key, value], i) => {
            const currentPath = path ? `${path}/${key}` : key;
            const isInnermostLevel = Object.entries(obj).every(([_, value]) => typeof value !== 'object' || value === null);

            if (typeof value === 'object' && value !== null) {
                return (
                    <MenuSection
                        key={i}
                        text={key.replaceAll("_", " ").replaceAll(".md", "")}
                        i={depth}
                        blur={depth == 2 ? blur : false}
                        setBlur={setBlur}
                    >
                        <motion.ul key={i + 'ul'} variants={variants}>
                            {renderMenu(value, currentPath, depth + 1)}
                        </motion.ul>
                    </MenuSection>
                )
            } else {
                return (
                    <MenuItem key={i} text={key.replaceAll("_", " ").replaceAll(".md", "")} href={"/" + currentPath.replaceAll("/", "+").replaceAll(".md", "")} stickTo={stickTo} setCursorVariant={setCursorVariant} />
                );
            }
        });
    };



    return (
        <motion.div
            id="container"
            variants={variants}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        // initial={{
        //     x: 0
        // }}
        // animate={{
        //     x: x,
        // }}
        // transition={{
        //     // duration: move.strength,
        //     // ease: "linear",
        //     // type: "spring",
        //     // stiffness: move.strength,
        //     // damping: 10,
        // }}
        >
            {renderMenu(files)}
        </motion.div>
    )
}
