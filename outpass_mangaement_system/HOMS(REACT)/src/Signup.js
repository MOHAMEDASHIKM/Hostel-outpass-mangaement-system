// Signup.js

import Nav from 'react-bootstrap/Nav';
import PreLogin from "./preloginpg";
import "./styles.css";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import News from './news';

// import { useNavigate } from 'react-router-dom'; 
const Signup = () => {

  


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    typeofuser: '',
    // file:'',
    isActive: false,


  });




  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const [notification, setNotification] = useState('');



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if (!formData.username || !formData.email || !formData.password || !formData.age || !formData.typeofuser ) {
      setNotification('Successfully created an account!');
      return;
    }

    if (formData.password.length < 6) {
      setNotification('Password should be at least 6 characters.');
      return;
    }

    if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      setNotification('Please provide a valid age between 18 and 100.');
      return;
    }

    // Set isActive to true if the user is above 18 years old
    const isActive = formData.age >= 18;

    // Add isActive property to formData
    const userData = { ...formData, isActive };

    try {
      const response = await fetch('http://localhost:5000/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setNotification(data.error);
        navigate('/login');

      } else {
        console.log('User Registered:', data.user);
        setNotification('Successfully created an account!');


        // Storing the registered user's data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(data.user));


      }

    } catch (error) {
      // console.error('Error:', error.message);
      setNotification('Failed to register. Please try again later.');
    }
  };





  return (
    <div id="hom">
      <div className="news-container-adimpage">
        <News />
      </div>
      <div className="signup-container1">
        {notification && <div className="notification">{notification}</div>}
        <h2>NEW USER SIGN UP</h2>
        <form onSubmit={handleSubmit} id='signup'>
          <div className="input-group">
            <label htmlFor="new-username">New Username:</label>
            <input
              type="text"
              name="username"
              id="new-username"
              placeholder='new username'
              value={formData.username}
              onChange={handleInputChange}

            />
          </div>
          <div className="input-group">
            <label htmlFor="email">New Email :</label>
            <input
              type="email"
              name="email"
              id="new-password"
              placeholder='new email'
              value={formData.email}
              onChange={handleInputChange}

            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              id="new-password"
              name="age"
              placeholder='Age'
              value={formData.age} onChange={handleInputChange}

            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="usertype">User Type:</label>
            <select name="typeofuser" id='typeofuser' value={formData.typeofuser} onChange={handleInputChange}>
              <option value="">Select usertype</option>
              <option value="Staff">Staff</option>
              <option value="Student">Admin</option>
              <option value="Warden">Warden</option>
            </select>
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              name="password"
              placeholder='new password'
              value={formData.password}
              onChange={handleInputChange}

            />
          </div>
          <br />

          <button type="submit" id='signup-btn'>SIGN UP</button>
          <Nav.Link href="#/prelogin">
            <label className='log' onClick={(e) => { PreLogin }}>LOGIN'S</label>
          </Nav.Link>
        </form>

      </div>
    </div>
  );
};

export default Signup;





