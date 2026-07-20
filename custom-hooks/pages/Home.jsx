import React from 'react'
import { useBioContenxt } from '..'

const Home = () => {
    const {myName, myAge} = useBioContenxt()
    console.log(myName, myAge);
    
  return (
    <div>
      Home
    </div>
  )
}

export default Home
