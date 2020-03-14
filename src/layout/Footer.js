import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer>
      <div className="social-bar">
        <ul>
          <li>
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-google-plus-g"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="subscription">
        <div className="subscription-container">
          <form action="#" method="POST" className="email-form">
            <h3>Subscribe for updates</h3>
            <label htmlFor="email"></label>
            <input
              className="subscribe-input"
              type="email"
              name="email"
              placeholder="Enter your email here*"
            ></input>
            <button
              type="submit"
              value="submit"
              className="defaultButton alt-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
