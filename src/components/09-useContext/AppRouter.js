import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,           
  } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <NavBar/>

            <Routes>
                <Route path='/' element = { <HomeScreen/> }></Route> 
                <Route path='/Login' element = { <LoginScreen/> }></Route>
                <Route path='/About' element = { <AboutScreen/> }></Route>

                <Route path="*" element={<HomeScreen />} />

            </Routes>

        </div>
    </BrowserRouter>
  )
}
