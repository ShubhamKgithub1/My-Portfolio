import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from "./components/Header";
import Options from './components/Options';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className='w-screen h-screen relative bg-gradient-to-bl from-blue-400 to-purple-700'>
        {/* <img src='https://png.pngtree.com/background/20230622/original/pngtree-3d-rendered-black-leaf-background-picture-image_3929878.jpg' alt=''
        className='w-screen aspect-ratio relative'/> */}
      </div>
      <div className='absolute top-0 text-white'>
      <Header/>
      <div className='flex justify-between h-[70vh] items-center px-10'>
      <Profile/>
      <Options/>
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
