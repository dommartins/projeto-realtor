import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Recovery from '../pages/recovery/Recovery';
import Error from '../pages/error/Error';
import Agents from '../pages/agents/Agents';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Properties from '../pages/properties/Properties';

export default function Router() {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='properties' element={<Properties/>}/>
            <Route path='agents' element={<Agents/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='recovery' element={<Recovery/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </React.Fragment>
  )
}
