import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
import './Header.css';
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
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <button className="loginBTN" type="button">
            <Link to="/">Log In</Link>
          </button>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

function Header(props) {
  return (
    <header>
      <Navigation count={props.itemCount} />
    </header>
  );
}
export default Header;
