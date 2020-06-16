import React from 'react';
import '../styles/Login.css';
export default function LogIn() {
  return (
    <section className="user-login">
      <form
        action="http://localhost:3005/api/users/login"
        autoComplete="on"
        method="POST"
        className="login-form"
      >
        <h1 className="login-header">Member Login</h1>
        <div className="input-container">
          <label htmlFor="email"></label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            required
          />
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="password"
          />
          <button className="login-submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
