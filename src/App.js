

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


function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/how" element={<How/>} />
      <Route path="/find" element={<Find/>} />
     </Routes>
    <Footer/> 
      
    </>
 
  );
}
export default App;
