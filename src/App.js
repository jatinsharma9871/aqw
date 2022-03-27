import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home';
import { Link, Route, Routes } from 'react-router-dom';
import { TodoItem } from './components/TodoItem';
import { TodoEdit } from './components/TodoEdit';
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
     
      <h3>Welcome to the TODO app</h3>
      
      <Link to="/login" style={{margin:10}}> login</Link>
      <Link to="/home"> Add Your todo</Link>

      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="/todo/:id" element={<TodoItem />}></Route>
        <Route path="/todo/:id/edit" element={<TodoEdit />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
