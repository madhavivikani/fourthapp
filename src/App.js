import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Blog from './Blog';
import Portfolio from './Portfolio';
import Shop from './Shop';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/shop" element={ <Shop/> } />

      </Routes>
    </div>
  )
}

export default App;
