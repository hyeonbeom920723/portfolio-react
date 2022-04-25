import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.scss';


function Nav() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/resume'>resume</Link></li>
        </ul>
    </div>
    )
}

export default Nav