import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../../../components/modals/CartWidget';
import '../../styles/Header.css';
function Navigation(props) {
  return (
    <nav>
      <ul className='nav-links'>
        <NavLink to='/'>
          <div className='logo'>
            <span className='brand-name'>Gling</span>
            <span className='brand-desc'>Urban Bikes</span>
          </div>
        </NavLink>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/Blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/FAQ'>FAQ</NavLink>
        </li>
        <li>
          <NavLink to='/Contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/Members'>Members</NavLink>
        </li>
        <li>{props.children}</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const LoginButton = props => (
  <Link
    to={{
      pathname: '/Login',
      state: { prevPath: window.location.pathname },
    }}
  >
    <button className='loginBTN' type='button'>
      <span className='user-icon far fa-user'></span>

      <p>{props.name ? props.name : 'Log In'}</p>
    </button>
  </Link>
);
const ProfileButton = props => (
  <div className='profile-menu'>
    <button className='loginBTN' type='button'>
      <span className='user-icon far fa-user'></span>
      <Link to='/Profile'>{props.name}</Link>
    </button>
    <nav className='drop-down' id='profile-drop'>
      <ul>
        <li>
          <Link to='/Profile'>Profile</Link>
        </li>
        <li>
          <Link to='/User/Orders'>Orders</Link>
        </li>
        <li>
          <Link to='/User/Settings'>Settings</Link>
        </li>
      </ul>
    </nav>
  </div>
);
// text-overflow: ellipsis;
function Header(props) {
  return (
    <header>
      <Navigation>
        {!props.user && <LoginButton />}
        {props.user && <ProfileButton name={props.user.user} />}
      </Navigation>
    </header>
  );
}
export default Header;
