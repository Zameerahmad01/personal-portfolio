import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Services from './components/services/Services'
import Work from './components/work/Work'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
      </main>
      
    </>
  )
}

export default App
