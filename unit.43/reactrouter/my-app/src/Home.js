import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {

    return (
    
    <div className='vm'>

<h1>VENDING MACHINE</h1>
        <nav>
            {/* <Link to='/'>
            Home
            </Link><br></br> */}
            <Link to='/Cheetos'>
            Cheetos
            </Link><br></br>
            <Link to='/Sprite'>
            Sprite
            </Link>
            <br></br>
            <Link to='/Cookie'>
            Cookie
            </Link>
        </nav>

   


    </div>
)
}

export default Home