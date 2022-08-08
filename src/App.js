
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"; 

export default class App extends Component {
  pageSize=10;
  apiKey="7a274334aa264ae5b253ce456d07fd8f";
  state={
    progress:0
  }

   setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
        <Route exact path="/science" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
       
        <Route exact path="/health" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/bussiness" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="bussiness" pageSize={this.pageSize} country="in" category="bussiness"/>}></Route>
        <Route exact path="/technology" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        <Route exact path="/sports" element={<News setProgress= {this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
        </Routes>
        
        </Router>
      </div>
    )
  }
}
