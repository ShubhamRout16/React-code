import { useState } from 'react' // one of the react hooks -> controls the UI updation
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  
  const addSome = () => {
    if(counter > 20){
      setCounter(counter + 0)
    }else if(counter < 20 && counter >= 0){
      setCounter(counter + 1)
    }
  }

  const takeSome = () => {
    if(counter < 0){
      setCounter(counter + 0)
    }else if(counter <= 20 && counter > 0){
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addSome}>Increase value</button>
      <br />
      <button onClick={takeSome}>Decrease value</button>
    </>
  )
}

export default App
