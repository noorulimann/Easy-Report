import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="welcome-box">
          <h2>Welcome!</h2>
          <form>
            <div className="input-group">
              <label htmlFor="cnic">CNIC:</label>
              <input type="text" id="cnic" name="cnic" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="login-actions">
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img src="logo.jpg" alt="EasyReport Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;
