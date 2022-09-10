import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Nav />
    </Router>
  );
}

export default App;
