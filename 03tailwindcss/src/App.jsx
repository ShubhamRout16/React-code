import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-900 text-shadow-black p-4 rounded-2xl'>hello</h1>
      <Card username = 'shubham' job = 'developer'/>
      <Card username='rout' job='jr.dev'/> 
    </> 
  )
}

export default App
