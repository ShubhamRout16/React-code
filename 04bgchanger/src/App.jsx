import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('red');

  const Blue = () => {
    setColor('blue');
  }
  const black = () => {
    setColor('black');
  }
  const green = () => {
    setColor('green');
  }
  const olive = () => {
    setColor('olive');
  }
  

  return (
    <div className='w-screen h-screen' 
    style={{backgroundColor: color}}>
      <h1>bg changer</h1>
      <button onClick={Blue}>blue</button>
      <button onClick={black}>black</button>
      <button onClick={green}>green</button>
      <button onClick={olive}>olive</button>
    </div>
  )
}

export default App
