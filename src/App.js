
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const[mode,setMode]=useState('light');
  const toogle=()=>{
    if((mode==='light')){
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
    <Router>
      <Navbar title="New textUtilties" About="About Us" mode={mode} toogle={toogle}  />
      <div className="container my-3">    
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform exact heading="Enter Text Below" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
