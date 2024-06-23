import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const handleSignup = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };


  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Bienvenido {userEmail}! </h1>
          <p>Haz los cambios que quieras en las tasas, te llegara una notificación en tu mail con los cambios.</p>
          <button className="boton-login" onClick={() => setIsAuthenticated(false)}>Logout</button>
          <iframe 
          src="https://docs.google.com/spreadsheets/d/1UM7ganfucor7vw5Z7iAL3Vqw77erB9EpaFPjtZ-nbQI/edit"
          width="100%"
          height="600px"
          allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="auth-container">
          <p>Si ya tienes cuenta, Inicia sesión, si no Regístrate</p>
          <div className="auth-box">
            <h2>Login</h2>
            <Login onLogin={handleLogin} />
          </div>
          <div className="auth-box">
            <h2>Signup</h2>
            <Signup onSignup={handleSignup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
