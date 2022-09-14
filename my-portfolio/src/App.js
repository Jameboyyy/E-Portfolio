import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
        <Nav />
        <Contact />
        <Profile />
        <Skills />
        <Projects />
        <Footer />
    </Router>
  );
}

export default App;
