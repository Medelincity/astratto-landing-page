import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <main className='w-full flex items-center justify-center'>
      <div className="content w-full max-w-7xl relative">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App