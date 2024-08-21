import "./Landing.css"
import { useState, useRef } from 'react'
import Manifold from './assets/Manifold'
import Typewriter from "./assets/Typewriter"
import MenuButton from "./assets/MenuButton"
import Cursor from "./assets/Cursor"
import Magnetic from "./assets/Magnetic"
import MainMenu from "./assets/MainMenu"

export default function Landing() {

  const [cursorVariant, setCursorVariant] = useState('default');
  const [menuIsOpen, setMenuIsOpen] = useState("closed");
  const button = useRef(null);
  const stickTo = useRef(null);

  const enterHighlight = () => {
    setCursorVariant("highlight");
  }

  const exitHighlight = () => {
    setCursorVariant("default");
  }

  const enterStick = (stick) => {
    setCursorVariant("stuck");
    stickTo.current = stick;
  }

  const exitStick = () => {
    stickTo.current = null;
    setCursorVariant("default");
  }

  const handleMenu = () => {
    if (menuIsOpen === "open") {
      setMenuIsOpen("closed");
    } else {
      setMenuIsOpen("open");
    }

  }

  return (
    <div id="landing">
      <Cursor cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} stickTo={stickTo} />

      <main>
        {/* Manifold */}
        <section id="manifold">
          <Manifold />
        </section>

        {/* Welcome Text */}
        <section id="welcome">
          <div>
            <Typewriter cssStyle={{ userSelect: 'none' }} onMouseEnter={enterHighlight} onMouseLeave={exitHighlight} />
            <hr />
            <h2 className="noSelect" onMouseEnter={enterHighlight} onMouseLeave={exitHighlight}>
              Panos' Physics and Math Notes
            </h2>
          </div>
        </section>
      </main>

      {/* Visit Menu */}
      <MenuButton onClick={handleMenu} >
        <Magnetic>
          {/* <Link to="/test"> */}
          <h2
            ref={button}
            className="noSelect buttonText"
            style={{ fontSize: '24px' }}
            onMouseEnter={() => {
              enterStick(button.current.getBoundingClientRect());
            }}
            onMouseLeave={() => {
              exitStick();
            }}
          >
            explore
          </h2>
          {/* </Link> */}
        </Magnetic>
      </MenuButton>
      <MainMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} stickTo={stickTo} setCursorVariant={setCursorVariant} />
    </div>
  )
}
