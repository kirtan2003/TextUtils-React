
import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';  



function App() {
  const [mode , setMode] = useState('light'); //wether dark mode is enabled or not
  const [alert , setAlert] = useState(null); 
  
  const showAlert = (message , type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#46494d';
      // document.body.style.backgroundColor = '#37393b';
      // document.body.style.backgroundColor = '#1a139c';
      // document.body.style.backgroundColor = '#08233b';
      document.body.style.backgroundColor = '#0c2a45';
      showAlert("Dark Mode has been Enabled" , "success");
      // document.title = "TextUtils - Dark Mode";

      //this is to grab attention of User - Dont use it!
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now!"  ;
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled" , "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/>        */}
     {/* this is prop...so i can change the title */}
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-4">
      <Routes>
          <Route exact path='/about' element = {<About mode={mode}/>}>
          </Route>
          <Route exact path='/'
             element = {<TextForm heading="Try TextUtils - Word/Character Counter , Text to Speech..." showAlert={showAlert} mode={mode}/>}>
          </Route>
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;
