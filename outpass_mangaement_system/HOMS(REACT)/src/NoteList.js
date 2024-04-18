import React, { useState, useEffect } from 'react';
import News from './news';
import './styles.css';
import QRCode from 'react-qr-code';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const NoteList = () => {
  const [outpasses, setOutpasses] = useState([]);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
   

    fetchUserData();
  }, [token]);

  const refreshPage = async() => {
    
   await fetchOutpasses()
   
  };
  const fetchUserData = async () => {
    try {
      const decoded = await jwtDecode(token);
      await setUserId(decoded.userstd._id);
     
      
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  const fetchOutpasses = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/outpass/${userId}`);
      setOutpasses(response.data);
    } catch (error) {
      console.error('Error fetching outpasses:', error.message);
    }
  };

  const deleteOutpass = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/outpasses/${id}`);
      if (response.status === 200) {
        setOutpasses(outpasses.filter((outpass) => outpass._id !== id));
      }
    } catch (error) {
      console.error('Error deleting outpass:', error.message);
    }
  };

  return (
    <div>
      <div id="hom">
        <div className="news-container-staffpg">
          <News />
        </div>
        <div className="viewdata-container">
          <h2>OUT-PASS REQUESTS</h2><br></br>
          <button onClick={refreshPage} id="rebtn">Refresh</button>
          <ul>
            {outpasses.map((outpass) => (
              <li key={outpass._id} className="notelist-item">
                <strong>Name:</strong> <p className="text1">{outpass.name}</p> 
                <strong>Reason:</strong> <p className="text1">{outpass.reason}</p>
                <strong>Destination:</strong><p className="text1">{outpass.destination}</p>
                <strong>Room Number:</strong><p className="text1">{outpass.roomnumber}</p>
                <strong>Admission ID :</strong><p className="text1">{outpass.admissionid}</p>
                <strong>Department:</strong><p className="text1">{outpass.department}</p>
                <strong>Contact:</strong><p className="text1">{outpass.contact}</p>
                <strong>Duration:</strong><p className="text1">{outpass.duration1.split("T")[0]} - {outpass.duration2.split("T")[0]}</p>
                <strong>Status:</strong><p className="text1">{outpass.status}</p><br />

                <section className="qrcode">
                  {outpass.aproved ? (
                    <QRCode value={[
                      `Name: ${outpass.name},`,
                      `Reason: ${outpass.reason},`,
                      `Destination: ${outpass.destination},`,
                      `Room Number: ${outpass.roomnumber},`,
                      `Admission ID: ${outpass.admissionid},`,
                      `Department: ${outpass.department},`,
                      `Contact: ${outpass.contact},`,
                      `Duration: ${outpass.duration1.split("T")[0]} - ${outpass.duration2.split("T")[0]},`,
                      `Status: ${outpass.status}.`
                    ].join('\n')} />
                  ) : null}
                </section>
                <button className="applybtn" onClick={() => deleteOutpass(outpass._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
