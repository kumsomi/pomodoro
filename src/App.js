import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import {Home, Pomodoro, Task, InvalidRoute, Login, Signup} from "./pages";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthRequire } from './AuthRequire';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="*" element={<InvalidRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
