
import { useReducer } from "react";

// useReducer: Complex state ko manage karne ke liye use hota hai.
// State update karne ka logic ek reducer function mein likhte hain.

// Examples: Shopping cart, forms, authentication, todo app.

// useReducer(reducer, initialState)
// dispatch({ type: "ACTION" }) → action bhejta hai
// reducer(state, action) → next state return karta hai
// State change → React component re-render karta hai

// interview:
// useReducer React Hook hai jo complex state logic ko reducer function aur dispatch mein bheji gayi type aur payload ki madad se manage karta hai.
// Kab use karte hain? Jab multiple related state updates hon ya state update karne ka logic complex ho.
// Kyun use karte hain? Taake state update logic ek jagah centralize ho aur code manageable rahe.
// Example: Shopping cart, form management, counter with multiple actions, authentication state.
// Important: useReducer sirf multiple states ke liye nahi hota; complex state logic ke liye bhi use hota hai. useState bhi multiple states manage kar sakta hai.

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    // 1. Increment
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    // 2. Decrement
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    // 3. Reset
    case "RESET":
      return {
        ...state,
        count: 0,
      };

    // 4. Add Todo
    case "ADD_TODO":
      if (!action.payload.trim()) {
        return state;
      }

      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    // Unknown action
    default:
      return state;
  }
}

function UseReducerConcept() {
  // Initial State
  const initialState = {
    count: 0,
    todos: ["Learn React"],
  };

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>My useReducer App</h1>

      {/* 1. Counter */}
      <h2>Counter: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

      {/* 2. Todo List */}
      <h2>Todos</h2>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: "Practice useReducer",
          })
        }
      >
        Add Todo
      </button>
    </div>
  );
}

export default UseReducerConcept;
