import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import CalenderApp from './calender_app/CalenderApp'
import Login from './calender_app/Login'

const Main = () => {


 
 
  return (
    
    <BrowserRouter>
      <Routes>
            <Route exact path = 'login' element = {<Login />} />
            <Route exact path = '/' element = {<CalenderApp />} />              
       
    </Routes>

      
    </BrowserRouter> 
  )
}

export default Main