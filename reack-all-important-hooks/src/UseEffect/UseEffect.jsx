import { useEffect } from "react";
// useEffect(()=>{console.log(count)}, [count])
// useEffect: Component ke render hone ke baad kisi kaam ko automatically run karne ke liye use hota hai.
// Examples: API call, timer, event listener, document title update.
// useEffect(fn) → har render ke baad
// useEffect(fn, []) → sirf initial render ke baad
// useEffect(fn, [count]) → count change hone par + initial render par

function UseEffectConcept() {
  useEffect(() => {
    // 1. Timer
    const timer = setInterval(() => {
      console.log("1 second passed");
    }, 1000);

    // 2. Event Listener
    const handleMouseMove = (e) => {
      console.log(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3. Document Title
    document.title = "My UseEffect App";

    // Cleanup
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <p>Move your mouse and check the console.</p>
    </div>
  );
}

export default UseEffectConcept;