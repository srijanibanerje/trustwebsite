import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Userlayout from './components/Userlayout';
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Bemember from './components/Bemember';
import Teammember from './components/Teammember';
import Aboutus from './components/Aboutus';
import MembershipForm from './components/MembershipForm';
import Gallery from "./components/Gallery";
import Donateform from './components/Donateform';
function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Userlayout><Home /></Userlayout>} />
        <Route path="/project" element={<Userlayout><Project /></Userlayout>} />
        <Route path="/contact" element={<Userlayout><Contact /></Userlayout>} />
        <Route path="/about" element={<Userlayout><About /></Userlayout>} />
        <Route path="/aboutus" element={<Userlayout><Aboutus /></Userlayout>} />
        <Route path="/bemember" element={<Userlayout><Bemember /></Userlayout>} />
        <Route path="/teammember" element={<Userlayout><Teammember /></Userlayout>} />
        <Route path="/membershipform" element={<Userlayout><MembershipForm /></Userlayout>} />
        <Route path="/gallery" element={<Userlayout><Gallery /></Userlayout>} />
        <Route path="/donateform" element={<Userlayout><Donateform /></Userlayout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
