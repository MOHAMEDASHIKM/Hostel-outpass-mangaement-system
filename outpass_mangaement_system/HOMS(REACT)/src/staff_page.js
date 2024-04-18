
import News from "./news";
import "./styles.css";
import React, { useState, useEffect } from 'react';
// import userContext from "./context";




const Staffapp = () => {

  const [outpasses, setOutpasses] = useState([]);

  // ===========this for staff approved data get from staff
  const [status, setStatus] = useState("");




  // ==============this funtion for reload the page 
  const refreshPage = (e) => {
    // location.reload();
    fetchOutpasses();
  };

  // =================this useeffect for inport data in loading time
  useEffect(() => {
    fetchOutpasses();

  }, []);


  // =============this function for inport data from database backend
  const fetchOutpasses = async () => {
    try {
      const response = await fetch('http://localhost:5000/outpasses');
      if (!response.ok) {
        throw new Error('Failed to fetch outpasses');
      }
      const data = await response.json();

      setOutpasses(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error
    }

  };

  const statusUpdate = async (id) => {
    console.log("fgh", status);

    try {
      // console.log("fgh",status);
      const response = await fetch(`http://localhost:5000/outpass/${id}`, {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      // alert(response.json())
    } catch (error) {
      console.error('Error:', error.message);
      setNotification('Failed to update. Please try again later.');
    }
  };



  return (
    <div id="hom">
      <div className="news-container-staffpg">
        <News/>
      </div>
      <div className="viewdata-container">
        <h2>OUT-PASS REQUESTS</h2><br></br>
        <button onClick={refreshPage} id='rebtn'>Refresh</button>
        <ul>
          {outpasses.map((outpasses) => (
            <li key={outpasses._id} className="notelist-item">
              <strong>Name:</strong> <p className='text1'> {outpasses.name}</p> <br />
              <strong>Reason:</strong> <p className='text1'> {outpasses.reason} </p><br />
              <strong>Destination:</strong><p className='text1'> {outpasses.destination} </p><br />
              <strong>Duration:</strong><p className='text1'> {outpasses.duration1.split("T")[0]} - {outpasses.duration2.split("T")[0]} </p><br />
              <strong>Status:</strong><p className='text1'> {outpasses.status} </p><br />

              <div id='btspace'>
                <button id='rejectbtn' onClick={() => { setStatus("rejected  ❌"); statusUpdate(outpasses._id) }}>X</button>

                <button id='selectbtn' onClick={() => { setStatus("forward to warden  ✅"); statusUpdate(outpasses._id) }}>✅︎</button>
              </div>

            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Staffapp;
