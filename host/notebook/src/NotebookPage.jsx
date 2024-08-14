import './NotebookPage.css'
import { useEffect, useState, useRef, useMemo } from 'react'
import Markdown from 'react-markdown'
import Cursor from './assets/Cursor';
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

export default function NotebookPage({ filename = './Distributions.md' }) {

  const [markdown, setMarkdown] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default')
  const stickTo = useRef(null);

  const enterHighlight = () => {
    setCursorVariant("highlight");
  }

  const exitHighlight = () => {
    setCursorVariant("default");
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

  useEffect(() => { readFile(); }, [])

  const markdownRender = useMemo(() => {
    return (
      <Markdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeMathjax]}
        components={{
          img(props) {
            const { node, ...rest } = props
            return <img onMouseEnter={() => { enterHighlight(); }} onMouseLeave={() => { exitHighlight(); }} {...rest} />
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
      <div id="notebookPage" >
        <main>
          {markdownRender}
        </main>
      </div>
    </>
  )
}
