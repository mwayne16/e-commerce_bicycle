import React, { useState, useRef, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { UserContext } from '../../../components/context/userContext';
import useDataFetching from '../../../components/custom_hooks/useDataFetching';
import '../../styles/Login.css';

function Login(props) {
  //Once a user is sucessfull in login, have a popout box with a sucess message
  // Redirect the user back to their previous location
  // Turn login button to dropdown menu with
  //profile, orders

  const [form, updateForm] = useState({});
  const { makeRequest, error } = useDataFetching('/api/users/login', true);

  const onSubmit = async e => {
    e.preventDefault();
    const logIn = async ({ email, password }) => {
      const res = await makeRequest('POST', { email, password });
      props.setUser(res && res.data);
    };
    return logIn(form);
  };

  const onChange = e =>
    updateForm({ ...form, [e.target.name]: e.target.value });
  return (
    <section className='user-login'>
      <form autoComplete='on' className='login-form' onSubmit={onSubmit}>
        <h1 className='login-header'>Member Login</h1>
        {error && <ValidationMessage message={error} />}
        <div className='input-container'>
          <label htmlFor='email'></label>
          <input
            placeholder='Email'
            name='email'
            type='email'
            id='email'
            value={form.email || ''}
            onChange={onChange}
            required
          />
          <label htmlFor='password'></label>
          <input
            placeholder='Password'
            name='password'
            type='password'
            id='password'
            value={form.password || ''}
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
const UserAuth = props => {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <>
      {user && <Redirect to={props.location.state.prevPath} />}
      <Login setUser={setUser} />
    </>
  );
};
const ValidationMessage = props => (
  <div className='auth-error-box'>
    <h1>{props.message}</h1>
  </div>
);
export { UserAuth };
//  const response =  Axios({
//     method: 'POST',
//     url: '/api/users/login',
//     data: {
//       email: form.email,
//       password: form.password,
//     },
//   })
// response.data
//   .then(res =>
//     res.data.status === 'success'
//       ? setUser(res.data)
//       : updateForm({
//           ...form,
//           status: { authenticated: false, message: res.data.message },
//         })
//   )
//   .catch(err => console.log(err));

// const onSubmit = async e => {
//   e.preventDefault();
//   await makeRequest('POST', { name: 'Marcus' });
//   console.log(results);
// };
