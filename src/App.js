import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <div className="w-screen h-full absolute top-0 left-0 bg-gradient-to-bl from-blue-400 to-purple-700 blur-md">
        {/* <img src='https://i.pinimg.com/originals/f6/4c/59/f64c59febd4dca0c078b8f7b3e0a4553.jpg' alt=''
        className='w-screen aspect-ratio relative'/> */}
        {/* <img src='https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/60108279b92ae26c883d9240_6002086f72b7273ea001d711_color-trends-2018.jpeg' alt=''
        className='w-screen aspect-ratio relative'/> */}
      </div>
      <div className="relative z-10 text-white w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
