import { useRef, useState, useEffect } from "react";
import './Typewriter.css'

export default function Typewriter({ text = "Notesbo\b\b\bbook", speed = 150 }) {
    const [currentText, setCurrentText] = useState("");
    const hasRun = useRef(false);

    let timer;

    const load = () => {
        let i = -1;
        timer = setInterval(() => {
            i++
            if (i >= text.length) {
                clearInterval(timer);
            } else {
                if (text.charAt(i) != '\b') {
                    setCurrentText((prev) => prev + text.charAt(i));

                } else {
                    setCurrentText((prev) => prev.slice(0, -1));
                }
            }
        }, speed + 100 * Math.random());
    };

    if (!hasRun.current) {
        load();
        hasRun.current = true;
    }

    return (
        <h1>{currentText}</h1>
    );
}