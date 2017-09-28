import React from 'react';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
// NavLink - If you want to style is dynamically activeClassName
// exact only to matches the route path '/'

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
            </li>
        </ul>
    );
}

export default Nav;
