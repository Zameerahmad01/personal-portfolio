import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
      
    </>
  )
}

export default App
