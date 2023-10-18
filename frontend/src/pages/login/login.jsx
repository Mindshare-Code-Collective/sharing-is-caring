import React, { useState } from 'react';
import './login.scss';

const Login = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="login-form-container">
      <div className = "auth-form">
          <form className = "login-form" onSubmit={handleSubmit}>
              <h3>Log In</h3>
              <label for="email">E-Mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="e@mail.com" id="email" name="email" />
              <label for="password">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
              <button type="submit">Log In</button>
          </form>
          <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register!</button>
      </div>
    </div>
  )
}

export default Login