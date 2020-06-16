import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../../components/modals/CartWidget';
import '../styles/Header.css';
function Navigation(props) {
  return (
    <nav>
      <ul className="nav-links">
        <div className="logo">
          <span className="brand-name">Gling</span>
          <span className="brand-desc">Urban Bikes</span>
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Members">Members</Link>
        </li>
        <li>
          <button className="loginBTN" type="button">
            <span className="user-icon far fa-user"></span>{' '}
            <Link to="/Login">Log In</Link>
          </button>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}
export default Header;
