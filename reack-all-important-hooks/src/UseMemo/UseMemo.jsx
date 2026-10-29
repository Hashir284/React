import { useMemo, useState } from "react";

// useMemo ek React Hook hai jo function ki return value ko memorize kerta he
// taake jab tak uski dependencies change na hon toh React woh calculation dobara na kare.

export default function USEMEMO() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState(1);
    console.log("--- APP COMPONENT RENDERED ---");
  // Strict Mode mein ab yeh sirf 'val' change hone par hi dobara chalega
  const value = useMemo(() => slow(val), [val]);

  console.log(value);

  return (
    <div>
      <p>{count}</p>
      <div style={{ marginTop: "30px" }}>
        {/* ++pre ki bajaye pre + 1 */}
        <button onClick={() => setCount((pre) => pre + 1)}>increment</button>
        <button onClick={() => setCount((pre) => pre - 1)}>decrement</button>
      </div>
      <br />
      <p>{val}</p>
      <div style={{ marginTop: "30px" }}>
        {/* ++pre ki bajaye pre + 1 */}
        <button onClick={() => setVal((pre) => pre + 1)}>increment</button>
        <button onClick={() => setVal((pre) => pre - 1)}>decrement</button>
      </div>
    </div>
  );
}

const slow = (val) => {
  console.log("called");
  let b = performance.now();
  let ans = new Array(10000000).fill(val).reduce((a, c) => {
    return a + 1;
  }, 0);
  let a = performance.now();
  console.log(a - b);
  return ans;
};