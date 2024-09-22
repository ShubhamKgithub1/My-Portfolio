import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
