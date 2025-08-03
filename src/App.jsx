import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Mission from './components/sections/Mission'
import Founders from './components/sections/Founders'
import Stats from './components/sections/Stats'
import Events from './components/sections/Events'
import JoinUs from './components/sections/JoinUs'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Founders />
        <Stats />
        <Events />
        <JoinUs />
      </main>
      <Footer />
    </div>
  )
}

export default App