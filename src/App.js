import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <div className="w-screen h-full absolute top-0 left-0 bg-gradient-to-bl from-blue-400 to-purple-700 blur-md"></div>
      <div className="relative z-10 text-white w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
