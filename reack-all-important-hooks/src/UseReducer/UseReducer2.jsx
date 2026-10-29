
import { useReducer, useState } from "react";
import reactLogo from "../assets/react.svg";

const initialState = {
  count: 0,
  bgColor: "#ffffff",
  showImage: false,
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "SET_CUSTOM":
      return {
        ...state,
        count: action.payload,
      };

    case "TOGGLE_BG":
      return {
        ...state,
        bgColor:
          state.bgColor === "#ffffff"
            ? "#e0e0e0"
            : "#ffffff",
      };

    case "TOGGLE_IMAGE":
      return {
        ...state,
        showImage: !state.showImage,
      };

    default:
      return state;
  }
};

function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customValue, setCustomValue] = useState("");

  const handleCustomCounter = () => {
    if (customValue.trim() === "") return;

    const value = Number(customValue);

    if (!Number.isFinite(value)) return;

    dispatch({
      type: "SET_CUSTOM",
      payload: value,
    });

    setCustomValue("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: state.bgColor,
        color: "#111",
        padding: "24px",
      }}
    >
      <nav>
        <a href="#useState">useState Page</a>
        {"   "}
        <a href="#useReducer">useReducer Page</a>
      </nav>

      <h1 id="useReducer">Page using useReducer</h1>

      {/* Counter */}
      <h2>Counter: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>

      {/* Custom Counter */}
      <br />
      <br />

      <input
        type="number"
        placeholder="Set custom value"
        value={customValue}
        onChange={(e) => setCustomValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleCustomCounter();
        }}
      />

      <button onClick={handleCustomCounter}>
        Set Custom Counter
      </button>

      {/* Background Color Toggle */}
      <h2>Background Color Toggle</h2>

      <button
        onClick={() => dispatch({ type: "TOGGLE_BG" })}
      >
        Toggle Background Color
      </button>

      {/* React Logo Toggle */}
      <h2>Image Toggle</h2>

      <button
        onClick={() => dispatch({ type: "TOGGLE_IMAGE" })}
      >
        {state.showImage ? "Hide Image" : "Show Image"}
      </button>

      {state.showImage && (
        <div>
          <img
            src={reactLogo}
            alt="React Logo"
            width="150"
          />
          <p>React Logo</p>
        </div>
      )}
    </div>
  );
}

export default UseReducerPage;
