import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../../../components/modals/CartWidget';
import '../../styles/Header.css';
import { UserContext } from '../../../components/context/userContext';
function Navigation(props) {
  return (
    <nav>
      <ul className='nav-links'>
        <div className='logo'>
          <span className='brand-name'>Gling</span>
          <span className='brand-desc'>Urban Bikes</span>
        </div>
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
  <button className='loginBTN' type='button'>
    <span className='user-icon far fa-user'></span>{' '}
    <Link
      to={{
        pathname: '/Login',
        state: { prevPath: window.location.pathname },
      }}
    >
      {props.name ? props.name : 'Log In'}
    </Link>
  </button>
);

function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header>
      <Navigation>
        <LoginButton name={user && user.user.name} />
      </Navigation>
    </header>
  );
}
export default Header;
