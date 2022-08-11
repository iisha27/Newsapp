
import './App.css';
import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router,
  Routes,
  Route,
}from "react-router-dom"; 

const App=()=> {
  const pageSize=10;
  const apiKey="7a274334aa264ae5b253ce456d07fd8f";
  const[progress, setProgress]=useState(0);
  
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route exact path="/science" element={<News setProgress= {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/" element={<News setProgress= {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress= {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
       
        <Route exact path="/health" element={<News setProgress= {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/bussiness" element={<News setProgress= {setProgress} apiKey={apiKey} key="bussiness" pageSize={pageSize} country="in" category="bussiness"/>}></Route>
        <Route exact path="/technology" element={<News setProgress= {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        <Route exact path="/sports" element={<News setProgress= {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
        </Routes>
        
        </Router>
      </div>
    )
  
}

export default App
