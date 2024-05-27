import React from 'react'
import './App.css'
import Welcome from './components/pages/Welcome'
import { Route, Routes } from "react-router-dom";
import List from "./components/pages/List";
import AgregarMovie from "./components/pages/AgregarMovie";
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './components/pages/Index';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route path="/movies/list" element={<List/>}/>
          <Route path="/movies/add" element= {<AgregarMovie/>} />
          <Route path="/index" element= {<Index/>} />
        </Routes>
      </Router>
  );
}


export default App
