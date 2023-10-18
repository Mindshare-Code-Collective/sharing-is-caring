import React, { useState } from 'react';
import './register.scss';

const Register = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
      <div className = "auth-form-container"> 
        <div className= "auth-form">
            <form className = "register-form" onSubmit={handleSubmit}>
              <h3>Register</h3>
              <label for="name">Full Name</label>
              <input value={name} name="name" id="name" placeholder="Full Name" type="text" onChange={e=>setName(e.target.value)}/>
              <label for="email">E-Mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="e@mail.com" id="email" name="email" />
              <label for="password">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
              <button type="submit">Log In</button>
          </form>
          <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log In!</button>
        </div>
      </div>
  )
}

export default Register