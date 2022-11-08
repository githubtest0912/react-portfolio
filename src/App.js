import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
