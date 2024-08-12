import { useState } from 'react'
import Landing from './Landing'
import Cursor from './assets/Cursor'

function App() {

  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <>
      <Cursor cursorVariant={cursorVariant} />
      <Landing setCursorVariant={ setCursorVariant } />
    </>
  )
}

export default App
