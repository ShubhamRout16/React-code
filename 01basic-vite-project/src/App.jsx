import HelloWorld from "./hw" 


function App() {
  // v3 -> how to inject variables
  // we use {} -> {username} evaluated expression
  const username = "shubham rout"

  return (
    // fragments -> <></> because vite doesnt allow two or more elements so all elements are wrapped in single element -> fragment
    <> 
    <HelloWorld/>
    <h1>shubham rout working with vite {username}</h1>
    </>
  )
}

export default App
