import "./Landing.css"
import React from 'react'
import Manifold from './assets/Manifold'
import Typewriter from "./assets/Typewriter"

export default function Landing() {
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
            <Typewriter />
            <hr />
            <h2>Panos' Physics and Math Notes</h2>
          </div>
        </section>
      </main>

      <menu>
        <button id="open-menu">explore</button>
      </menu>
    </>
  )
}
