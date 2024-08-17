import { motion } from "framer-motion"

export default function MenuSection({ children, i = 2, text = 'A category' }) {
    const Tag = "h" + i

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                staggerChildren: 0.07, 
                delayChildren: 0.01
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }


    return (
        <motion.div className={"menuSection"+i}
            variants={variants}
            whileHover={{
                scale: i == 2? 1.2 : 1
            }}
        >
            <Tag>{text}</Tag>
            <motion.div
                variants={variants}
                style={{
                    paddingLeft: 10,
                }}
            >
                {children}
            </motion.div>
        </motion.div>

    )
}
