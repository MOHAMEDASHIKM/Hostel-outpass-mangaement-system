// NoteForm.js
import React, { useEffect, useState } from 'react';
import News from './news';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'

// import userContext from "./context";





const NoteForm = () => {

  const navigate = useNavigate();


  // const [noteText, setNoteText] = useState('');
  // const [reason, setReason] = useState('');
  // const [destination, setDestination] = useState('');
  // const [duration1, setDuration1] = useState('');
  // const [duration2, setDuration2] = useState('');

  const [outpassformData, setOutPassFormData] = useState({
    name: '',
    reason: '',
    destination: '',
    department: '',
    roomnumber: '',
    admissionid: '',
    contact: '',
    duration1: '',
    duration2: '',
    isActive: false,
    userId: "",
  });



  const [notification, setNotification] = useState('');
  useEffect(() => {
    async function fetch() {
      const decoded =  jwtDecode(localStorage.getItem('token'))
      console.log(decoded); 

      setOutPassFormData({ ...outpassformData, userId: decoded.userstd._id })
    }
    fetch()
  }, [])


  const handleInputChange = (e) => {
    setOutPassFormData({ ...outpassformData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!outpassformData.name || !outpassformData.reason || !outpassformData.destination || !outpassformData.contact || !outpassformData.admissionid || !outpassformData.department || !outpassformData.roomnumber || !outpassformData.userId || !outpassformData.duration1 || !outpassformData.duration2) {
      setNotification('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/NoteForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(outpassformData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setNotification(data.error);
      } else {
        console.log('User applyoutpass:', data.outpass);
        setNotification('Successfully created a request!');
        // Storing the registered user's data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(data.outPass));

        navigate('/preapply');

      }

    } catch (error) {
      console.error('Error:', error.message);
      setNotification('Failed to apply. Please try again later.');
    }
  };



  return (
    <div id="hom">
      <div className="news-container-stdapplypg">
        <News />
      </div>
      <div className="adddata-container">
     
        {notification && <div className="notification">{notification}</div>}

        <h2>NEW OUT-PASS</h2>
        <form onSubmit={handleSubmit}>
         
          <label className='applyinput1'>
            Name :
          </label >

          <input
            type="text"
            name='name'
            placeholder="Enter Your Name"
            className='appinput1'
            value={outpassformData.name}
            onChange={handleInputChange}
          />
        <br />
        <label className='applyinput1'>
            Admissionid :
          </label >

          <input
            type="text"
            name='admissionid'
            placeholder="Enter Your admissionid"
            className='appinput2'
            value={outpassformData.admissionid}
            onChange={handleInputChange}
          />
        <br />
        <label className='applyinput1'>
            Department:
          </label >

          <input
            type="text"
            name='department'
            placeholder="Enter Your department"
            className='appinput3'
            value={outpassformData.department}
            onChange={handleInputChange}
          />
        <br />

          <label className='applyinput1'>
            Reason:
          </label >

          <input
            type="text"
            name='reason'
            placeholder="Enter Your Reason"
            className='appinput4'
            value={outpassformData.reason}
            onChange={handleInputChange}
          />
        <br />
        <label className='applyinput2'>
            Destination:
          </label>

          <input
            type="text"
            name='destination'
            placeholder="Enter Your Destination"
            className='appinput5'
            value={outpassformData.destination}
            onChange={handleInputChange}
          />
          <br/>
        
        <label className='applyinput1'>
            Room Number:
          </label >

          <input
            type="text"
            name='roomnumber'
            placeholder="Enter Your RoomNo"
            className='appinput6'
            value={outpassformData.roomnumber}
            onChange={handleInputChange}
          />
        <br />
        <label className='applyinput1'>
           Contact :
          </label >

          <input
            type="text"
            name='contact'
            placeholder="Enter Your contact"
            className='appinput7'
            value={outpassformData.contact}
            onChange={handleInputChange}
          />
        <br />

          

          <label className='applyinput3'>
            Duration Date :
          </label>
          <br />
          <input
            type="date"
            name='duration1'
            className='appinput8'
            value={outpassformData.duration1}
            onChange={handleInputChange}
          /> -

          <input
            type="date"
            name='duration2'
            className='appinput9'
            value={outpassformData.duration2}
            onChange={handleInputChange}
          />

          <button type="submit" className='applybtn'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
