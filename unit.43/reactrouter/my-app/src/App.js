
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Home from './Home';
import Sprite from './Sprite';
import Cheetos from './Cheetos';
import Cookie from './Cookie'
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sprite' element={<Sprite/>}></Route>
        <Route path='/cheetos' element={<Cheetos/>}></Route>
        <Route path='/cookie' element={<Cookie/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
