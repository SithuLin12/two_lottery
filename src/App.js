import React from 'react';
import { AutoCenter } from 'antd-mobile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Sport from './components/sport/Sport';
import CalendarPage from './components/calendar/CalendarPage'; // Assuming you create a wrapper component for Calendar
import './App.css'
import Marquee from './components/home/Marquee';

const shortText = "MM 2d 3d";
const marqueeText = "စလော့ ၊ ငါးပြစ် နှင့် ထီထိုးဆော့ကစားရန် support မှ အပ်ပလီကေးရှင်းရယူပါ";
function App() {
  return (
    <div className="App">
      <Router>
        <div className=''>

          <AutoCenter className='heade r '>
            <h3  className='text-primary py-2 fw-bolder '>{shortText}</h3>
          </AutoCenter>
          <Marquee text={marqueeText} />

          
          <Routes>
        
          <Route path="/" element={<Home />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/calendar" element={<CalendarPage />} />
         
          </Routes>
          <div className=''>
          <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;