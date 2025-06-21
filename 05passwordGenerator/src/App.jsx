import { useState , useCallback ,useEffect} from 'react'

import './App.css'
import { use } from 'react'
import { useRef } from 'react'

function App() {
  // features for our password generator
  // f1 -> slider -> increase length
  const [length,setLength] = useState(7)

  // f2 -> toggle numbers in the password
  const [numberAllowed , setNumberAllowed] = useState(false)

  // f3 -> toggle characters in the password
  const [charAllowed , setCharAllowed] = useState(false)

  // input field to store the password value
  const [password,setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if(numberAllowed){
      str += '0123456789'
    }
    if(charAllowed){
      str += '!@#$%^&*()-_=+]{};:/?.>'
    }
    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length , numberAllowed , charAllowed , setPassword])

  useEffect(() => {
    passwordGenerator();
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  const copyToClipboard = useCallback(() => {
    // to select current password
    passwordRef.current?.select()
    // to select range
    passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  } , [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly  ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            {/* slider */}
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          {/* number checkbox */}
          <div>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="">Numbers</label>
          </div>
          {/* character checkbox */}
          <div>
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
