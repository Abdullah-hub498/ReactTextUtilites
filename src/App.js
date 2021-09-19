
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
function App() {

  const[mode,setMode]=useState('light');
  const toogle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="New textUtilties" About="About Us" mode={mode} toogle={toogle} />
      <div className="container my-3">    
        <Textform heading="Enter Text Below" mode={mode}/>
      </div>
      <About/>
    </>
  );
}

export default App;
