import './App.css';
import Navbar from'./components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] =useState('light'); //whether the dark mode is enabled or not
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },3000)
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-primary')
}

const togglemode = (palette) => {
  removeBodyClasses();
  document.body.classList.add('bg-' + palette.trim()); // Use trim() to remove any leading/trailing spaces.

  if (mode=== 'light' ,'warning', 'danger', 'success' , 'info' , 'primary'){
    setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Pallete Changed", "success");
      document.title = "Word Converter - Dark Mode";
  } 
  else {
    setMode('light');
        document.body.style.backgroundColor = 'white';  
        showAlert("Light mode is enabled", "success");
        document.title = "Word Converter - Light Mode";
  }
}

  return (
    <>
    <Router>
    <Navbar title="Word Counter" about="About us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Text Converter" mode={mode} />} />
      <Route exact path='/about' element={<About mode={mode} />} />

      </Routes>
    </div>
    </Router> 
    </>
  );
};
export default App;  
