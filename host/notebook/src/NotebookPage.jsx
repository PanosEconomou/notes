import './NotebookPage.css'
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll } from "framer-motion";
import Markdown from 'react-markdown';
import Cursor from './assets/Cursor';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import slugify from 'react-slugify';
import remarkGfm from 'remark-gfm'
import Magnetic from './assets/Magnetic';
import PageButton from './assets/PageButton';
import MainMenu from './assets/MainMenu';
import { useParams, useLocation, Link } from 'react-router-dom';

export default function NotebookPage({ }) {

  const { path } = useParams();
  const location = useLocation();

  const directory = "./NOTES/" + path.slice(0, path.lastIndexOf('+') + 1).replaceAll("+", "/")
  const name = path.slice(path.lastIndexOf('+') + 1)
  const filename = directory + name + ".md";


  const [markdown, setMarkdown] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default')
  const stickTo = useRef(null);
  const scrolling = useRef(false);
  const [menuIsOpen, setMenuIsOpen] = useState("closed");
  const markdownRef = useRef(null);
  const tocRefs = useRef([]);
  const headingRefs = useRef([]);
  const [toc, setToc] = useState(<h2>Table of Contents</h2>);

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
    if (event.width !== undefined) {
      stickTo.current = event
    } else {
      stickTo.current = event.target.getBoundingClientRect();
    }
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

  const hideOnScroll = () => {
    stickTo.current = null;
    setCursorVariant("hidden");
  }

  useEffect(() => {
    window.addEventListener('scroll', hideOnScroll);
    return () => {
      window.removeEventListener('scroll', hideOnScroll);
    }
  }, [])

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
    window.scrollTo(0, 0);

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
    headingRefs.current = [];
    tocRefs.current = [];
    return (
      <Markdown
        className="markdown"
        remarkPlugins={[remarkMath, remarkGfm]}
        // rehypePlugins={[rehypeRaw, rehypeMathjax]}
        rehypePlugins={[rehypeRaw,
          [rehypeMathjax, {
            tex: {
              packages: {
                '[+]': [
                  'base',
                  'bracket',
                  'bussproofs',
                  'bbox',
                  'cancel',
                  'ams',
                  'amscd',
                  'extpfeil',
                  'boldsymbol',
                  'mathtools',
                  'amsthm',
                  'amssymb',
                  'centernot',
                  'noerror',
                  'mhchem',
                  'html',
                  'color',
                  'newcommand',
                  'enclose',
                  'action',
                  'verb',
                  'extpfeil',
                  'physics',
                  'noundefined',
                  'autoload',
                  'textmacros',
                  'xypic'
                ]
              }
            }
          }]
        ]}
        components={{
          img(props) {
            let { node, ...rest } = props
            rest.src = parseLink(rest.src);
            return <img onMouseEnter={enterHighlight} onMouseLeave={exitHighlight} {...rest} />
          },
          p(props) {
            const { node, ...rest } = props
            if (rest.children === "[TOC]" || rest.children === "[toc]") {
              node.tagName = 'div';
              node.children = [toc];
              return <div ref={el => (tocRefs.current[tocRefs.current.length] = el)} className="TOC">{toc}</div>
            } else {
              return <p onMouseEnter={enterBar} onMouseLeave={exitBar} {...rest} />
            }
          },
          h1(props) {
            const { node, ...rest } = props
            return <h1 ref={el => (headingRefs.current[headingRefs.current.length] = el)} id={slugify(rest.children)} onMouseEnter={stickUnder} onMouseLeave={unstick} {...rest} />
          },
          h2(props) {
            const { node, ...rest } = props
            return <h2 ref={el => (headingRefs.current[headingRefs.current.length] = el)} id={slugify(rest.children)} onMouseEnter={stickUnder} onMouseLeave={unstick} {...rest} />
          },
          h3(props) {
            const { node, ...rest } = props
            return <h3 ref={el => (headingRefs.current[headingRefs.current.length] = el)} id={slugify(rest.children)} onMouseEnter={stickUnder} onMouseLeave={unstick} {...rest} />
          },
          a(props) {
            const { node, ...rest } = props
            return (
              <a onMouseEnter={stickLink} onMouseLeave={unstick} {...rest} />
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    );
  }, [markdown, toc]);

  const createTOC = () => {


    const tocObject = headingRefs.current.map((item) => {
      if (item !== null) {
        const headerLevel = item.tagName.toLowerCase();
        const headerText = item.textContent;
        const headerInner = item.innerHTML;

        return {
          level: headerLevel,
          text: headerText,
          inner: headerInner,
        }
      }
    }).filter(item => item !== undefined);

    setToc(
      <ul>
        {tocObject.map((item, index) => {
          const Tag = item.level
          return (
            <li key={index}>
              <Link to={`#${slugify(item.text)}`} onMouseEnter={stickLink} onMouseLeave={unstick}>
                <Tag dangerouslySetInnerHTML={{ __html: item.inner }}></Tag>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    if (headingRefs.current.length != 0) createTOC();

  }, [markdown])

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
      }
    }
  }, [markdownRender, location])

  return (
    <>
      <Cursor cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} stickTo={stickTo} />
      <PageButton onClick={handleMenu}>
        <Magnetic>
          <h2
            className="noSelect buttonTextVert"
            style={{
              fontSize: '24px',
            }}
            onMouseEnter={stick}
            onMouseLeave={unstick}
          >menu</h2>
        </Magnetic>
      </PageButton>
      <div id="notebookPage" >
        <main>
          <motion.div className='progressBar' style={{ scaleY: scrollYProgress }} />
          <div ref={markdownRef}>
            {markdownRender}
          </div>
        </main>
      </div>
      <MainMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} stickTo={stickTo} setCursorVariant={setCursorVariant} />
    </>
  )
}
