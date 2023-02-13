import * as styles from './NavBar.module.css';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

   return <nav  className={styles.nav}>
            <span className={styles.span}>
                <h2> Pokeapp </h2>
            </span>
            <div className={styles.links}>
                <Link to = '/'>Home</Link>
                <Link to = '/create'>Create Pokemon</Link>
                <Link to = '/pokedex'> Pokedex </Link>
            </div>
        </nav>;

};

export default NavBar;