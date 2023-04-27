

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Find from './pages/Find';
import How from './pages/How';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Login from './pages/login';


function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/how" element={<How/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
    <Footer/> 
      
    </>
 
  );
}
export default App;
