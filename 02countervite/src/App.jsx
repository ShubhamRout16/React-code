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
      //  interview asked qs -> setCounter is executed so many times will value change or work the same way 
      // -> will work normally because its the property of useState hooks that it sends command to fibre in batches so all setCounter are seen as same task by fibre
      // its also called snapshot state
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      // will add continously each of the previous results
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
