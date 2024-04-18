// Login.js
import React, { useState } from 'react';
import "./styles.css";
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import News from './news';



const Stafflogin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setNotification('Please fill out all fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setNotification('Successfully logged in welcome');

        localStorage.setItem('token', data.token); // Save JWT token to localStorage
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        if (data.user.isActive) {
          navigate('/staff');
        } else {
          navigate('/');
        }
      } else {
        setNotification(data.error);
        setLoading(false);
      }
    } catch (err) {
      setNotification('Error during login. Please try again.');
      setLoading(false);
    }
  };


  return (
    <div id="hom">
      <div className="news-container">
        <News/>
      </div>
      <div className="login-container">
        {notification && <div className="notification">{notification}</div>}
        <h2>STAFF  LOGIN</h2>
        <form id='login' onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Email :</label>
            <input
              type="email"
              id="username"
              name="email"
              placeholder='username'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='password'
              value={formData.password} onChange={handleInputChange}
              required
            />
          </div>
          <br />

          <button type="submit" id='btn' disabled={loading}>LOGIN</button>

          {/* <Nav.Link href="#/Signup">
            <label id='sbtn'>SIGN UP</label>
          </Nav.Link> */}
        </form>
      </div>
    </div>
  );
};

export default Stafflogin;



