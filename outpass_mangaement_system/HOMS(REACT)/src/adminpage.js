//admihome
import React, { useState } from 'react';
import "./styles.css";
import Adminnews from './adminnews';
import Nav from 'react-bootstrap/Nav';


const Adminpage = () => {

  const [eventsData, setEventesData] = useState({
    day: '',
    date: '',
    title: '',
    alte: '',
    
  });





  const handleInputChange = (e) => {
    setEventesData({ ...eventsData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventsData.day || !eventsData.date || !eventsData.title || !eventsData.alte ) {
      setNotification('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/adminhome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventsData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setNotification(data.error);
      } else {
        console.log('User add the events:', data.events);
        setNotification('Successfully add the events !');
        // Storing the registered user's data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(data.events));

      }

    } catch (error) {
      console.error('Error:', error.message);
      setNotification('Failed to apply. Please try again later.');
    }
  };



  return (
    <div id="hom">
      <div className="news-container-adimpage">
        <Adminnews />
      </div>
      <div className="admin-container">
        <h2>ADMIN PAGE</h2>
        <br/>

        <Nav.Link href="#/Signup">
          <label className='adduserbtn'>ADD NEW USER'S</label>
        </Nav.Link>

        <Nav.Link href="#/Signupstd">
          <label className='addstdbtn'>ADD NEW STUDENT</label>
        </Nav.Link>

        
        <Nav.Link href="#/stdlist">
          <label className='addstdbtn'>VIEW STUDENTS LIST</label>
        </Nav.Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>ADD NEWS & EVENT</h2>
        <br/>
        <form onSubmit={handleSubmit}>
          <label className='applyinput1'>
            Day :
          </label >

          <input
            type="text"
            name='day'
            placeholder="eg-(Mon-Sun)"
            className='addinput1'
            value={eventsData.day}
            onChange={handleInputChange}
          />
          
          <label className='applyinput1'>
            Date:
          </label >

          <input
            type="text"
            name='date'
            placeholder="eg-(Mar-08)"
            className='addinput1'
            value={eventsData.date}
            onChange={handleInputChange}
          />
          <br />

          <label className='applyinput2'>
            Destination:
          </label>

          <input
            type="text"
            name='title'
            placeholder="title of the events"
            className='addinput2'
            value={eventsData.title}
            onChange={handleInputChange}
          />
      

          <label className='applyinput3'>
            alte by  :
          </label>
          <input
            type="text"
            name='alte'
            className='addinput3'
            placeholder="eg-(dep of MCA)"
            value={eventsData.alte}
            onChange={handleInputChange}
          />
          <br />

          <button type="submit" className='addevbtn'>Add event</button>
        </form>





      </div>
    </div>
  );
};

export default Adminpage;
