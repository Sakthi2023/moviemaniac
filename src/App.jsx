import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRouter from "./components/AllRouter/AllRouter";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AllRouter />
    </div>
  );
};

export default App;
