import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './features/Counter/Counter'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width:"350px",border:"2px solid black",borderRadius:"0px"}}>
    <h1>Redux</h1>
      <Counter/>
    </div>
    <br />
    <div style={{width:"900px",border:"2px solid black",borderRadius:"0px",background:"pink"}}>
      <Test/>
    </div>

    </>
  )
}

export default App
