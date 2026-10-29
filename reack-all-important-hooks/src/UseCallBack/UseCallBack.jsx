// useCallback React ka ek Hook hai jo function ki reference ko memoize karta hai.
//  ko tabhi recreate karta hai jab dependencies change hon
// Note : useCallback function ko permanently save nahi karta. 
// Ye mainly re-renders ke darmiyan function reference ko reuse karta hai.
// Ye unnecessary re-renders ko reduce karta hai, aur function

// For Interview:
// React mein component re-render hone par andar ke functions dobara naye ban jate hain, useCallback unko har baar function banne se rokta hai.
// Yeh function ki reference ko memory mein save (memoize) kar leta hai aur jab tak dependencies change na hon, wahi purana function reuse karta hai.
// Yeh zyadater tab use hota hai jab aap function ko kisi child component ko pass karte hain aur faltu re-renders ko rokna chahte hain.
import React, { useCallback, useState } from 'react'

const UseCallBack = () => {
    //   const [count, setCount] = useState(0);
    
    //   const handleClick = useCallback(() => {
    //     console.log(count);
    //   }, [count]);

    //   return (
    //     <>
    //       <h1>{count}</h1>

    //       <button onClick={() => setCount(count + 1)}>
    //         +
    //       </button>

    //       <button onClick={handleClick}>
    //         Check Count
    //       </button>
    //     </>
    //   );

    // const [cart, setCart] = useState(0);
    // const [name, setName] = useState("");

    // const addToCart = useCallback(() => {
    //     setCart(cart + 1);
    // }, [cart]);

    // return (
    //     <div>
    //         <h1>Shopping Cart</h1>

    //         <p>Items: {cart}</p>

    //         <button onClick={addToCart}>
    //             Add to Cart
    //         </button>

    //         <br /><br />

    //         <input
    //             type="text"
    //             placeholder="Enter your name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />

    //         <p>Hello {name}</p>
    //     </div>
    // );

}

export default UseCallBack