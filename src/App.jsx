import { AllRoutes } from "./Routes/Routes";
import {useState} from 'react'

import './App.css'
// import { AllRoutes } from "../src/Routes/Routes";
import{Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <AllRoutes />
      
    </div>
  );
}

export default App;



