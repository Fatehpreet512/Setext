import './App.css';
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About'
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')

  const changemode=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor='#5c7394';
      setmode('dark');
    }
    else{
        document.body.style.backgroundColor='white';
      setmode('light');
    }
  }
  return (
    <>
    <Router>
<Navbar title="SeText" abttxt="About" togglemode={changemode} mode={mode}/>
<div className="container">

<Switch>
          <Route exact path="/Abt">
            <About />
          </Route>
          
          <Route exact path="/">
          <Textform mode={mode} heading="Enter text to analyze"/>
          </Route>
        </Switch>
</div>
</Router>

    </>
  );
}

export default App;
