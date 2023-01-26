
import './App.css';
import Navbarr from './Navbar/Navbarr';
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <Outlet/>
    <Footer/>
    
    </div>
  );
}

export default App;
