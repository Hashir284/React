import React, { useEffect, useRef, useState } from 'react'
// UseRef Used to 
// 1. Access DOM Element directly
// 2. Aisi value store karna jo change ho, lekin component re-render na ho
// Interview
// useRef DOM element ka reference lene aur phir uss element ko access kerne keliye aur aisi value store karne ke
//  liye use hota hai jo change hone par re-render nahi karwati

// useRef ke do main use-cases hain: pehla yeh ke yeh direct DOM elements ko access karne ke liye use hota hai, aur doosra yeh ke yeh aisi mutable value ko store karta hai jo change hone par component ko re-render nahi karwati, jisse performance behtar rehti hai
 const UseRef = () => {
    // const [input, setInput] = useState("")
    //     const inputRef = useRef(null)

    //     const handleSubmit = (e) => {
    //         e.preventDefault()
    //         console.log(inputRef.current.value)
    //     }

    //     console.log('Rerendering Component');

    //   return (
    //     <div>
    //         input: <input
    //         //  type="text" value={input} onChange={(e) => setInput(e.target.value)}
    //         ref={inputRef}
    //           /><br /><br />
    //         <button onClick={handleSubmit}>Submit</button>
    //     </div>
    //   )

    const [count, setCount] = useState(0);
    const previousCount = useRef(null);

    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    return (
        <div>
            <h2>Current: {count}</h2>
            <h2>Previous: {previousCount.current}</h2>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default UseRef