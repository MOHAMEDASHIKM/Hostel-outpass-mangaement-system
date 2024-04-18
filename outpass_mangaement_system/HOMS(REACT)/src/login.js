// Login.js
import React, { useState } from 'react';
import "./styles.css";
import News from './news';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [formstdData, setFormStdData] = useState({
    email: '',
    password: ''
  });
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setFormStdData({ ...formstdData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formstdData.email || !formstdData.password) {
      setNotification('Please fill out all fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/loginstd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formstdData)
      });

      const data = await response.json();

      if (response.ok) {
        setNotification('Successfully logged in!');

        localStorage.setItem('token', data.token); 
      
        localStorage.setItem('currentUser', JSON.stringify(data.userstd));
        if (data.userstd.isActive) {
          navigate('/preapply');
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
        <News />
        </div>
      <div className="login-container">
        {notification && <div className="notification">{notification}</div>}
        <h2>STUDENT LOGIN</h2>
        <form id='login' onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Email :</label>
            <input
              type="email"
              id="username"
              name="email"
              placeholder='username'
              value={formstdData.email}
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
              value={formstdData.password} onChange={handleInputChange}
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

export default Login;



