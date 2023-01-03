import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Clock from './components/clock/Clock';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import AgeCalculator from './components/age/AgeCalculator';
import ImcCalculator from './components/imc/ImcCalculator';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>          
          <Route path="/clock" element={<Clock/>}/>          
          <Route path="/about" element={<About/>}/>          
          <Route path="/contact" element={<Contact/>}/>          
          <Route path="/age" element={<AgeCalculator/>}/>      
          <Route path="/imc" element={<ImcCalculator/>}/>        
              
        </Routes>
        <Footer/>
      </Router>      
    </div>    
  );
}

export default App;
