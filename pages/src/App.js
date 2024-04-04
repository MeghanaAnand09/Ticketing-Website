import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactForm from './pages/contact';
import Gallery from './pages/gallery';
import Form from './pages/form';
import Last from './pages/last';
import Sign from './pages/signup';
function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/form' element={<Form/>} />
            <Route path='/last' element={<Last/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/signup' element={<Sign/>} />
        </Routes>
        </Router>
    );
    }
  
export default App