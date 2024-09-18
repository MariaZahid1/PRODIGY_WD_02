import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TicTacToeGame from "./Pages/TicTacToeGame";
import Rules from "./Pages/Rules";
import "./App.css"; // Add your custom styles here

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<TicTacToeGame />} />
          <Route path="/rules" element={<Rules />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
