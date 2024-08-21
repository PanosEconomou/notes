import './NotebookPage.css'
import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useScroll } from "framer-motion"
import Markdown from 'react-markdown'
import Cursor from './assets/Cursor';
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import remarkGfm from 'remark-gfm'
import Magnetic from './assets/Magnetic';
import PageButton from './assets/PageButton';
import MainMenu from './assets/MainMenu';
import { useParams } from 'react-router-dom';

export default function NotebookPage({ }) {

  let { path } = useParams();

  let directory = "./NOTES/" + path.slice(0, path.lastIndexOf('+') + 1).replaceAll("+", "/")
  let name = path.slice(path.lastIndexOf('+') + 1)
  let filename = directory + name + ".md";

  const [markdown, setMarkdown] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default')
  const stickTo = useRef(null);
  const scrolling = useRef(false);
  const [menuIsOpen, setMenuIsOpen] = useState("closed");

  var timer = null;

  const { scrollYProgress } = useScroll();

  const enterHighlight = () => {
    if (scrolling.current) return;
    setCursorVariant("highlight");
  }

  const exitHighlight = () => {
    setCursorVariant("default");
  }

  const enterBar = () => {
    if (scrolling.current) return;
    setCursorVariant("bar");
  }

  const exitBar = () => {
    setCursorVariant("default");
  }

  const stickUnder = (event) => {
    if (scrolling.current) return;

    setCursorVariant("stuckUnder");
    stickTo.current = event.target.getBoundingClientRect();
  }

  const stick = (event) => {
    if (scrolling.current) return;
    setCursorVariant("stuck");
    stickTo.current = event.target.getBoundingClientRect();
  }

  const stickLink = (event) => {
    if (scrolling.current) return;
    setCursorVariant("stuckLink");
    stickTo.current = event.target.getBoundingClientRect();
  }

  const unstick = () => {
    setCursorVariant("default");
    stickTo.current = null;
  }

  const readFile = async () => {
    try {
      const response = await fetch(filename);
      const text = await response.text();
      setMarkdown(text);

    } catch (error) {
      console.log(error);
    }
  }

  const handleScroll = () => {
    scrolling.current = true;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      scrolling.current = false;
    }, 50);
  }

  const handleMenu = () => {
    if (menuIsOpen === "open") {
      setMenuIsOpen("closed");
    } else {
      setMenuIsOpen("open");
    }

  }

  useEffect(() => {
    readFile();
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [path])

  const parseLink = (link) => {
    if (!link.startsWith('http')) {
      return directory + link;
    } else {
      return link;
    }
  }

  const markdownRender = useMemo(() => {
    return (
      <Markdown
        className="markdown"
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeMathjax]}
        components={{
          img(props) {
            let { node, ...rest } = props
            rest.src = parseLink(rest.src);
            return <img onMouseEnter={() => { enterHighlight(); }} onMouseLeave={() => { exitHighlight(); }} {...rest} />
          },
          p(props) {
            const { node, ...rest } = props
            return <p onMouseEnter={() => { enterBar(); }} onMouseLeave={() => { exitBar(); }} {...rest} />
          },
          h1(props) {
            const { node, ...rest } = props
            return <h1 onMouseEnter={stickUnder} onMouseLeave={() => { unstick(); }} {...rest} />
          },
          h2(props) {
            const { node, ...rest } = props
            return <h2 onMouseEnter={stickUnder} onMouseLeave={() => { unstick(); }} {...rest} />
          },
          a(props) {
            const { node, ...rest } = props
            return (
              <a onMouseEnter={stickLink} onMouseLeave={() => { unstick(); }} {...rest} />
            );
          }
        }}
      >
        {markdown}
      </Markdown>
    );
  }, [markdown]);

  return (
    <>
      <Cursor cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} stickTo={stickTo} />
      <PageButton onClick={handleMenu}>
        <Magnetic>
          <h2
            className="noSelect buttonText"
            style={{ 
              fontSize: '24px',
              fontFamily: 'Playfair Display',
              padding: '10px'
             }}
            onMouseEnter={stick}
            onMouseLeave={unstick}
          >menu</h2>
        </Magnetic>
      </PageButton>
      <div id="notebookPage" >
        <main>
          <motion.div className='progressBar' style={{ scaleY: scrollYProgress }} />
          {markdownRender}
        </main>
      </div>
      <MainMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} stickTo={stickTo} setCursorVariant={setCursorVariant} />
    </>
  )
}
