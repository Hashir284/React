import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        {/* <Route ></Route> */}
      </Routes>
        
    </main>

      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
