import './NotebookPage.css'
import { useEffect, useState, useRef } from 'react'
import Markdown from 'react-markdown'
import Cursor from './assets/Cursor';

export default function NotebookPage({ filename = './Distributions.md' }) {

  const [markdown, setMarkdown] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default')
  const stickTo = useRef(null);

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

  return (
    <div id="notebookPage" >
      <Cursor cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} stickTo={stickTo} />
      <main>
        <Markdown
        
        >{markdown}</Markdown>
      </main>
    </div>
  )
}
