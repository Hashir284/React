import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// npx tailwindcss init -p

function App() {
  const [a,sa] = useState('')
  return (
    <div className="max-w-sm p-5 bg-white shadow-lg rounded-xl">
  <h2 className="text-xl font-bold">Card Title</h2>
  <p className="bg-red-600 mt-2">
    This is a simple card using Tailwind in React.
  </p>
  <form className="flex flex-col gap-4 w-80">
  <input
    className="border p-2 rounded"
    type="text"
    placeholder="Enter name"
    onInput={e=>sa(e.target.value)}
    />

  <input
    className="border p-2 rounded"
    type="email"
    placeholder="Enter email"
    onInput={e=>sa(e.target.value)}
    />

  <button className="bg-green-500 text-white p-2 rounded hover:bg-green-700">
    Submit
  </button>
</form>
</div>
  );
}

export default App;

