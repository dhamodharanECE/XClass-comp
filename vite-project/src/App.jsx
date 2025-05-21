import { useState } from 'react'
import './App.css'

function App() {
  const [valueOfCount, setValueOfCount] = useState(0);

  function increment(){
    setValueOfCount(valueOfCount + 1);
  }
  function decrement(){
    setValueOfCount(valueOfCount - 1);
  }
  console.log(valueOfCount);

  return (
    <>
      <div className='card'>
        <h1>Counter App</h1>
        <p>Count: {valueOfCount}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
       </div>
    </>
  )
}

export default App
