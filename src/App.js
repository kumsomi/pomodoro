import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import {Home, Pomodoro, Task, InvalidRoute} from "./pages";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/pomodoro" element={<Pomodoro/>}/>
        <Route path="*" element={<InvalidRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
