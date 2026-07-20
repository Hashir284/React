import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from '../pages/home'
import { useCounter } from './hooks/useCounter'

function App() {
  // const [count, setCount] = useState(0)

  const { count, increament, decreament, setByValue } = useCounter(0)

  let count2 = useCounter(0)


  return (
    <div>
      <Home />
      <div>counter 1
        <button onClick={increament}>+</button>
      <div>{count}</div>
      <button onClick={decreament}>-</button>
      <button onClick={onclick=>setByValue(0)}>Reset</button>
    </div>
    <br />
    <div>
      <button onClick={count2.increament}>+</button>
      <div>{count2.count}</div>
      <button onClick={count2.decreament}>-</button>
      <button onClick={onclick=>count2.setByValue(0)}>Reset</button>
      </div>    
      </div>
  )
}

export default App
