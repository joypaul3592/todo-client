import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompleteTask from './Components/CompleteTask/CompleteTask';
import Calender from './Components/Calender/Calender';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complateTask" element={<CompleteTask />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>

      <div>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
