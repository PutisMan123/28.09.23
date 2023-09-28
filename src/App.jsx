import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from "./menu";


export default function App() {
  return (
    <div className=" ">
      <Menu />
      <Router>
       
      <Routes />
    </Router>
    </div>
  );
}
