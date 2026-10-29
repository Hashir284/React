import { useContext, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseEffectConcept from './UseEffect/UseEffect'
import { CounterContext } from './Context/CounterContext'
import UseRef from './UseRef/UseRef'
import UseCallBack from './UseCallBack/UseCallBack'
import UseMemo from './UseMemo/UseMemo'
import Products from './UseMemo/usememoexample2'
import UseStateConcept from './UseState/UseState'
import UseReducerConcept from './UseReducer/UseReducer'
import UseReducerPage from './UseReducer/UseReducer2'

function App() {

  // const { count, setCount } = useContext(CounterContext)

// React mein state management ka matlab application ya component ke data ko manage karna aur update karna hai, taake user ke actions ke mutabiq UI dynamically re-render ho sake.
// Simple local state ke liye hum useState use karte hain, jabke complex local state ya logic ke liye useReducer use hota hai. Application-level par prop drilling se bachne aur global state manage karne ke liye Context API ya Redux Toolkit / Zustand jaisi libraries istemal ki jati hain

  // Definition: React Hooks: React Hooks aise special functions hote jo functional components mein state aur React ki doosri features use karne dete hain.
  // Some Points:
  // 1. Only present in functional components.
  // 2. Cannot be used in class components.
  // 3. should be called at the top level of the component.
  // 4. Cannot be called conditionally.

  // if (true) {
  //   useState(0) // ❌ This is not allowed, because useState is called conditionally.
  // }

  // return <UseEffectConcept />

  // return <div>
  //   <button onClick={()=>{ setCount(prev=>prev+1) }}>+</button><br /><br />
  //   {count}<br /><br />
  //   <button onClick={()=>{ setCount(prev=> prev>0 ? prev-1 : prev) }}>-</button>
  // </div>

  // return <UseRef />

  // return <UseCallBack />

  // return <UseMemo />

  // return <Products />

  // return <UseStateConcept />
 
  return <UseReducerPage />
}

export default App
