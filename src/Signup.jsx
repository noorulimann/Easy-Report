import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    cnic: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', form);
  };

  return (
    <div className="signup-container">
      <div className="logo-section">
        <img src="path-to-logo.png" alt="EasyReport Logo" className="logo" />
        <h2>EasyReport</h2>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Please Fill out form to Register!</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cnic"
          placeholder="CNIC"
          value={form.cnic}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <p>
          Having an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
