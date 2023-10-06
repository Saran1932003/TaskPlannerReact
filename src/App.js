import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginPage/Login';
import Dashboard from './Components/DashboardPage/Dashboard';
import Dashboard1 from './Components/DashboardPage/Dashboard1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard2 from './Components/DashboardPage/Dashboard2';
import Progression from './Components/DashboardPage/Progression';
import Upload from './Components/DashboardPage/Upload';
import MessageBox from './Components/DashboardPage/MessageBox';
import StudentLogin from './Components/LoginPage/StudentLogin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studentlogin" element={<StudentLogin/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<StuLogin/>} /> */}
          <Route path="/dashboard1" element={<Dashboard1/>} />

          <Route path='/calander' element={<Dashboard2 />} />
          <Route path='/checkbox1' element={<Progression />} />
          <Route path='/dragdrop' element={<Upload/>} />
          <Route path='/messagebox' element={<MessageBox/>} />
          <Route path='/studentlogin' element={<StudentLogin/>} />
          {/* <Route path='/contact' Component={CompA} /> */}
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
