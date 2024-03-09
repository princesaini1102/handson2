import React from 'react'
import './App.css';
import ContactUs from './component/ContectUs';
import ContactForm from './component/ContectForm';
import Button from './component/Button';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
    <Navigation />
    <ContactUs/>
     <Button/>
     <ContactForm/>
    
    </div>
  );
}

export default App;
