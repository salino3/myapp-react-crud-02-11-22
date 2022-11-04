import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h2>My App</h2>

      <div>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/pagecard">List</Link>
          </li>
          <li>
            <Link to="/first">1º page</Link>
          </li>
          <li>
            <Link to="/second">2º page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar