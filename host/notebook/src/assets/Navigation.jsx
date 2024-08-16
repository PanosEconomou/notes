import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
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
    console.log(result);

    return result;
  }

export default function Navigation() {

    const [files, setFiles] = useState([]);

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
            .then((data) => setFiles(data));
    }

    useEffect(() => {
        fetchFiles();
    }, []);


    return (
        <motion.ul
            variants={variants}
        >
            {files.map((file, i) =>
                <MenuItem key={i} text={file.replaceAll(".md", "")} href={file.replaceAll("/", "+").replaceAll(".md", "")} />
            )}
        </motion.ul>
    )
}
