import React, { useState } from 'react';
import useDataFetching from '../../components/custom_hooks/useDataFetching';
import '../styles/Login.css';
import Axios from 'axios';
export function UserAuth() {
  const [user, setUser] = useState({ email: '', password: '' });
  const onSubmit = async e => {
    e.preventDefault();
    const fetchUser = async () => {
      Axios({
        method: 'POST',
        url: '/api/users/login',
        data: {
          email: user.email,
          password: user.password,
        },
      })
        .then(res => {
          console.log(res.data, 'crickets'); // alert(`Welcome ${res.data.user}`);
        })
        .catch(err => console.log(err));
    };
    return await fetchUser();

    // return setUser({ email: '', password: '' });
  };
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <section className='user-login'>
      <form autoComplete='on' className='login-form' onSubmit={onSubmit}>
        <h1 className='login-header'>Member Login</h1>
        <div className='input-container'>
          <label htmlFor='email'></label>
          <input
            placeholder='Email'
            name='email'
            type='email'
            id='email'
            value={user.email}
            onChange={onChange}
            required
          />
          <label htmlFor='password'></label>
          <input
            placeholder='Password'
            name='password'
            type='password'
            id='password'
            value={user.password}
            onChange={onChange}
          />
          <button className='login-submit' type='submit' value='submit'>
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
