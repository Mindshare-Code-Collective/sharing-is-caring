import React, { useState } from 'react';
import './App.css';
// Components
import Footer from './component/Footer/Footer.jsx';
// Pages
import Home from './pages/homePage/Home.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div>
{/*       {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
    </div>
  );
}

export default App;
