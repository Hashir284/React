import React, { useContext } from 'react'
import { createContext } from "react";

export const BioContext = createContext()


export const BioProvider = ({ children }) => {
    const myName = 'hashir'
    const myAge = '18'

  return (
    <BioContext.Provider value={{myName, myAge}}>
        {children}
    </BioContext.Provider>
  )
}

//custom hooks
export const useBioContenxt = () =>{
    const context = useContext(BioContext)
    if(context === undefined) throw new Error ('Component must be wrapped with BioProvider')
    return context
}

