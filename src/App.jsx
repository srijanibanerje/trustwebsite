import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Userlayout from './components/Userlayout';
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Userlayout><Home /></Userlayout>} />
        <Route path="/project" element={<Userlayout><Project /></Userlayout>} />
        <Route path="/contact" element={<Userlayout><Contact /></Userlayout>} />
        <Route path="/about" element={<Userlayout><About /></Userlayout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
