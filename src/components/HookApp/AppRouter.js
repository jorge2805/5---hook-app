import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,           
  } from "react-router-dom";

import { NavBar } from './NavBar';

import { HomeScreen } from './HomeScreen';
import { CounterApp } from '../01-useState/CounterApp';
import { CounterWithCustomHook } from '../01-useState/CounterWithCustomHook';
import { SimpleForm } from '../02-useEffect/SimpleForm';
import { FormWithCustomHook } from '../02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { FocusScreen } from '../04-useRef/FocusScreen';
import { RealExampleRef } from '../04-useRef/RealExampleRef';
import { LayoutEffetct } from '../05-useLayoutEffect/LayoutEffetct';
import { Memorize } from '../06-memo/Memorize';
import { MemoHook } from '../06-memo/MemoHook';
import { CallbackHook } from '../06-memo/CallbackHook';
import { Padre } from '../07-tarea-memo/Padre';
import { TodoApp } from '../08-useReducer/TodoApp';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <NavBar/>

            <div className='container'>

            <Routes>
                <Route path='/' element = { <HomeScreen/> }></Route> 
                <Route path='/CounterApp' element = { <CounterApp/> }></Route> 
                <Route path='/CounterWithCustomHook' element = { <CounterWithCustomHook/> }></Route>
                <Route path='/SimpleForm' element = { <SimpleForm/> }></Route>
                <Route path='/FormWithCustomHook' element = { <FormWithCustomHook/> }></Route>
                <Route path='/MultipleCustomHooks' element = { <MultipleCustomHooks/> }></Route>
                <Route path='/FocusScreen' element = { <FocusScreen/> }></Route>
                <Route path='/RealExampleRef' element = { <RealExampleRef/> }></Route>
                <Route path='/LayoutEffetct' element = { <LayoutEffetct/> }></Route>
                <Route path='/Memorize' element = { <Memorize/> }></Route>
                <Route path='/MemoHook' element = { <MemoHook/> }></Route>
                <Route path='/CallbackHook' element = { <CallbackHook/> }></Route>
                <Route path='/Father' element = { <Padre/> }></Route>
                <Route path='/TodoApp' element = { <TodoApp/> }></Route>

                <Route path="*" element={<HomeScreen />} />

            </Routes>
            
            </div>
        </div>
    </BrowserRouter>
  )
}
