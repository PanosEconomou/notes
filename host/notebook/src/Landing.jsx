import "./Landing.css"
import React from 'react'
import Manifold from './assets/Manifold'

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
            <h1 id="typewriter"></h1>
            <hr />
            <h2>Panos' Physics and Math Notes</h2>
          </div>
        </section>
      </main>
    </>
  )
}
