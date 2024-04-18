// Signupstd.js

import Nav from 'react-bootstrap/Nav';
import PreLogin from "./preloginpg";
import "./styles.css";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import News from './news';

// import { useNavigate } from 'react-router-dom'; 
const Signupstd = () => {
  
const getToken = localStorage.getItem('token'); 

  const [formstdData, setFormStdData] = useState({
    username: '',
    email: '',
    Admissionid:'',
    password: '',
    age: '',
    typeofuser: '',
    // file:'',
    userID:'',
    isActive: false,
    roomnumber:'',
    contactnumber:'',
    department:'',


  });


 

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const [notification, setNotification] = useState('');

  

  const handleInputChange = (e) => {
    setFormStdData({ ...formstdData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formstdData);
    if (getToken){
        const decoded = await jwtDecode(getToken);
        // console.log(decoded);
        setFormStdData({...formstdData,userID:decoded.user._id})

    }
    
console.log(formstdData);
    if (!formstdData.username || !formstdData.email || !formstdData.password || !formstdData.age || !formstdData.typeofuser || !formstdData.userID || !formstdData.Admissionid || !formstdData.contactnumber || !formstdData.roomnumber || !formstdData.department ) {
      setNotification('Please fill out all fields.');
      return;
    }

    if (formstdData.password.length < 4) {
      setNotification('Password should be at least 4 characters.');
      return;
    }

    if (isNaN(formstdData.age) || formstdData.age < 18 || formstdData.age > 100) {
      setNotification('Please provide a valid age between 18 and 100.');
      return;
    }

  

    // Set isActive to true if the user is above 18 years old
    const isActive = formstdData.age >= 18;

    // Add isActive property to formstdData
    const userstdData = { ...formstdData, isActive };
    console.log(userstdData);

    try {
      const response = await fetch('http://localhost:5000/NewStd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userstdData)
      });

      if (!response.ok) {
        const data = await response.json();
        
        throw new Error(data.message || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setNotification(data.error);
      } else {
        console.log('User Registered:', data.userstd);
        setNotification('Successfully created an account!');
        navigate('/login');


        // Storing the registered user's data in localStorage
        localStorage.setItem('currentUserstd', JSON.stringify(data.userstd));
       
        


      }

    } catch (error) {
      console.error('Error:', error.message);
      setNotification('Successfully created an account!');
      navigate('/login');

    }
  };





  return (
    <div id="hom">
       <div className="news-container-adimpage">
      <News/>
      </div>
      <div className="signup-container1">
        {notification && <div className="notification">{notification}</div>}
        <h2>NEW STUDENT SIGN UP</h2>
        <form onSubmit={handleSubmit} id='signup'>
          <div className="input-group">
            <label htmlFor="new-username">New Username:</label>
            <input
              type="text"
              name="username"
              id="new-username"
              placeholder='new username'
              value={formstdData.username}
              onChange={handleInputChange}

            />
          </div>

          <div className="input-group">
            <label htmlFor="Admissionid">Admission ID :</label>
            <input
              type="text"
              name="Admissionid"
              id="new-username"
              placeholder='AdmissionID'
              value={formstdData.Admissionid}
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
              value={formstdData.email}
              onChange={handleInputChange}

            />
          </div>
          <br/>
          <div className="input-group">
            <label htmlFor="department">department :</label>
            <input
              type="text"
              name="department"
              id="new-password"
              placeholder='department'
              value={formstdData.department}
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
              value={formstdData.age} 
              onChange={handleInputChange}

            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="usertype">User Type:</label>
            <select name="typeofuser" id='typeofuser' value={formstdData.typeofuser} onChange={handleInputChange}>
              <option value="">Select usertype</option>
              <option value="Student">Student</option>
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
              value={formstdData.password}
              onChange={handleInputChange}

            />
          </div>
          <br />
       

          <div className="input-group">
            <label htmlFor="roomnumber">Room No:</label>
            <input
              type="number"
              id="new-password"
              name="roomnumber"
              placeholder='room no'
              value={formstdData.roomnumber} onChange={handleInputChange}

            />
          </div>
          <br />

          <div className="input-group">
            <label htmlFor="contactnumber">Contact No :</label>
            <input
              type="number"
              id="new-password"
              name="contactnumber"
              placeholder='contact no'
              value={formstdData.contactnumber} onChange={handleInputChange}

            />
          </div>
          <br />
          <button type="submit" id='signup-btn'>SIGN UP</button>
          <Nav.Link href="#/login">
            <label className='log' onClick={(e) => { PreLogin }}>LOGIN'S</label>
          </Nav.Link>
        </form>

      </div>
    </div>
  );
};

export default Signupstd;

