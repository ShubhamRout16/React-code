import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const name = "shubham rout"
// react me sb kuch ka tree banne ke baad variable ka injection hota h

// reacts method for creating element
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click me to visit google',
  name
)

createRoot(document.getElementById('root')).render(
  reactElement
)
