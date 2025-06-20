import HelloWorld from "./hw" 


function App() {
  return (
    // fragments -> <></> because vite doesnt allow two or more elements so all elements are wrapped in single element -> fragment
    <> 
    <HelloWorld/>
    <h1>shubham rout working with vite</h1>
    </>
  )
}

export default App
