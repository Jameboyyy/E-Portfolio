import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
        <Nav />
        <Profile />
        <Skills />
        <Projects />
    </Router>
  );
}

export default App;
