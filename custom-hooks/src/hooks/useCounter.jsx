import { useState } from 'react'

export const useCounter = (intialValue = 0)=>{
    const [count, setCount] = useState(intialValue)

    const increament = () =>{
        setCount(count + 1)
    }
    const decreament = () =>{
        if(count > 0) setCount(count - 1)
    }

    const setByValue = (val) =>{
        setCount(val)
    }

    return{
        count, 
        increament, 
        decreament, 
        setByValue
    }
}