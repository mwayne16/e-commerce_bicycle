import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { UserContext } from '../../../components/context/userContext';
import useDataFetching from '../../../components/custom_hooks/useDataFetching';
import '../../styles/Login.css';

const FormWrapper = ({ component: Component, children, props }) => {
  const { user, setUser } = React.useContext(UserContext);
  const [form, updateForm] = useState({});

  const onChange = e =>
    updateForm({ ...form, [e.target.name]: e.target.value });
  return (
    <>
      {user && (
        <Redirect
          to={props.location.state ? props.location.state.prevPath : '/'}
        />
      )}
      <Component {...props} form={form} setUser={setUser} onChange={onChange}>
        {children}
      </Component>
    </>
  );
};

const FormHeader = props => (
  <div className='login-head-wrapper'>
    <h1 className='user-icon far fa-user' id='login-icon'></h1>
    <h1 className='login-header'>{props.header}</h1>
  </div>
);

const InputGenerator = props => (
  <>
    <label htmlFor={props.name}>{props.labelText}</label>
    <input
      name={props.name}
      type={props.name}
      id={props.name}
      value={props.value || ''}
      onChange={props.onChange}
      required
    />
  </>
);
function LoginForm(props) {
  const { makeRequest, error } = useDataFetching('/api/users/login', true);
  const { email, password } = props.form;
  const onSubmit = async e => {
    e.preventDefault();
    const logIn = async () => {
      const res = await makeRequest('POST', { email, password });
      props.setUser(res && res.data);
    };
    return logIn();
  };

  return (
    <section className='user-login'>
      <div className='user-form-container'>
        <FormHeader header={'Sign in to Gling'} />
        <ValidationMessage error={error} message={error.message} />
        <div className='login-form-wrapper'>
          <form autoComplete='on' className='login-form' onSubmit={onSubmit}>
            <div className='input-container'>
              <InputGenerator
                labelText={'Email Address'}
                name={'email'}
                value={email}
                onChange={props.onChange}
              />
              <InputGenerator
                labelText={'Password'}
                name={'password'}
                value={password}
                onChange={props.onChange}
              />
              <button className='login-submit' type='submit' value='submit'>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <SignUpBox />
      </div>
    </section>
  );
}

function RegisterForm(props) {
  const { makeRequest, error } = useDataFetching('/api/users/register', true);
  const onSubmit = async e => {
    e.preventDefault();
    const registerAccount = async () => {
      const res = await makeRequest('POST', { name, email, password });
      props.setUser(res && res.data);
    };
    return registerAccount();
  };
  const { name, email, password } = props.form;
  return (
    <section className='user-login'>
      <div className='user-form-container'>
        <FormHeader header={'Register an account'} />
        <ValidationMessage error={error} message={error.message} />
        <div className='login-form-wrapper'>
          <form autoComplete='on' className='login-form' onSubmit={onSubmit}>
            <div className='input-container'>
              <InputGenerator
                labelText={'Your Name'}
                name={'name'}
                value={name}
                onChange={props.onChange}
              />
              <InputGenerator
                labelText={'Email Address'}
                name={'email'}
                value={email}
                onChange={props.onChange}
              />
              <InputGenerator
                labelText={'Password'}
                name={'password'}
                value={password}
                onChange={props.onChange}
              />
              <button className='login-submit' type='submit' value='submit'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
const SignUpBox = () => (
  <div className='sign-up-box'>
    <p>New to Gling? </p>
    <Link className='default-link' to='/register'>
      Create an account.
    </Link>
  </div>
);

const ValidationMessage = props =>
  props.error && (
    <div className='auth-error-box'>
      <h1>{props.message}</h1>
    </div>
  );

const Login = props => (
  <FormWrapper props={props} component={LoginForm}></FormWrapper>
);
const Register = props => (
  <FormWrapper props={props} component={RegisterForm}></FormWrapper>
);
export { Login, Register };
