import "./Landing.css"
import React from 'react'
import Manifold from './assets/Manifold'
import Typewriter from "./assets/Typewriter"
import MenuButton from "./assets/MenuButton"

export default function Landing({ setCursorVariant }) {


  const enterHighlight = () => {
    setCursorVariant("highlight");
  }

  const exitHighlight = () => {
    setCursorVariant("default");
  }

  return (
    <>
      <main>
        {/* Manifold */}
        <section id="manifold">
          <Manifold />
        </section>

        {/* Welcome Text */}
        <section id="welcome">
          <div>
            <Typewriter cssStyle={{ userSelect: 'none' }} onMouseEnter={enterHighlight} onMouseLeave={exitHighlight}/>
            <hr />
            <h2 className="noSelect" onMouseEnter={enterHighlight} onMouseLeave={exitHighlight}>
              Panos' Physics and Math Notes
            </h2>
          </div>
        </section>
      </main>

      {/* Visit Menu */}
      <MenuButton onClick={() => console.log('Button clicked!')}>
        <h2 className="noSelect" style={{ fontSize: '24px' }} onMouseEnter={enterHighlight} onMouseLeave={exitHighlight}>
          explore
        </h2>
      </MenuButton>
    </>
  )
}
