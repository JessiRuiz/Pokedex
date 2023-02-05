import * as styles from './NavBar.module.css';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

   return <nav className='nav'>
            <Link to = '/'>Home</Link>
            <Link to = '/create'>Create Pokemon</Link>
        </nav>;

};

export default NavBar;