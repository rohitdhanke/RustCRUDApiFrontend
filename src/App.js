import logo from './logo.svg';
import './App.css';
import React from "react"; 

import Login1 from "./forms/login"
import CreateEmployee from "./forms/create"
import DeleteEmployee from "./forms/deleteEmployee"
import Register from "./forms/registerEmployee"
import PostForm from "./forms/create1"
import DelForm from "./forms/deleteUser"
import FetchData from "./forms/getAllData"
import Dashboard from "./forms/getAllData2"

function App() {

  return (

    <div className="App">
        <Dashboard />
    </div>

  );
}

export default App;
