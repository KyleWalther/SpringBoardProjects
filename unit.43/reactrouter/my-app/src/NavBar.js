import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
            Home
            </Link><br></br>
            <Link to='/Cheetos'>
            Cheetos
            </Link><br></br>
            <Link to='/drink'>
            Drink
            </Link>
        </nav>
    )
}

export default NavBar




