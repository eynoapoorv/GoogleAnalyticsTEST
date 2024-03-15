import React from 'react'
import { Link } from 'react-router-dom';


const Button = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">FIRST</Link>
            </li>
            <li>
              <Link to="/secondPage">SECOND</Link>
            </li>
            <li>
              <Link to="/thirdPage">THIRD</Link>
            </li>
            <li>
              <Link to="/fourthPage">FOURTH</Link>
            </li>
          </ul>
        </nav>
        </>
    );
}

export default Button