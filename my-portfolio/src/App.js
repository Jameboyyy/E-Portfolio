import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
        <Nav />
        <Profile />
    </Router>
  );
}

export default App;
