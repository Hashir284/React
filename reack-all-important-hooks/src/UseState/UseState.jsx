
import { useState } from "react";

// useState: Component ke andar data (state) store aur update
// karne ke liye use hota hai.

// Examples: Counter, input fields, toggle, form data.

// useState(initialValue) → initial state set karta hai
// setCount(newValue) → state update karta hai
// State change → React component ko re-render karta hai

function UseStateConcept() {
  // 1. Counter
  const [count, setCount] = useState(0);

  // 2. Input Field
  const [name, setName] = useState("");

  // 3. Toggle
  const [isVisible, setIsVisible] = useState(true);

  // 4. Array State
  const [items, setItems] = useState(["React", "Node.js"]);

  // 5. Object State
  const [user, setUser] = useState({
    name: "Hashir",
    age: 20,
  });

  return (
    <div>
      <h1>My useState App</h1>

      {/* 1. Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>

      {/* 2. Input Field */}
      <h2>Name: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      {/* 3. Toggle */}
      <h2>Toggle Example</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>Hello React Developer!</p>}

      {/* 4. Array State */}
      <h2>Technologies</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => setItems([...items, "MongoDB"])}
      >
        Add MongoDB
      </button>

      {/* 5. Object State */}
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        onClick={() =>
          setUser((prev) => ({
            ...prev,
            age: prev.age + 1,
          }))
        }
      >
        Increase Age
      </button>
    </div>
  );
}

export default UseStateConcept;
