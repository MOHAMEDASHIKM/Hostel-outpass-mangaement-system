import News from "./news";
import "./styles.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Profile = () => {
  const [userstd, setUserstd] = useState([]);
  const [userId, setUserId] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
   

    fetchUserData();
  }, [token]);

  const fetchUserData = async () => {
    try {
      const decoded = await jwtDecode(token);
      await setUserId(decoded.userstd._id);
     
      
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  const fetchUserstd = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/profile/${userId}`);
      setUserstd(response.data);
    } catch (error) {
      console.error('Error fetching userstd:', error.message);
    }
  };


  // const refreshPage = async () => {
  //   await fetchUser();
  // };

  return (
    <div id="hom">
      <div className="news-container-staffpg">
        <News />
      </div>
      <div className="viewdata-container">
        <h2>PROFILE</h2><br></br>
        {/* <button onClick={refreshPage} id='rebtn'>Refresh</button> */}
        <ul> 
        
          {userstd.length > 0 && userstd.map((userstd) => (
 

            <li key={userstd} className="notelist-item">
              <strong>Name:</strong> <p className='text1'> {userstd.username}</p> <br />
              <strong>Age:</strong> <p className='text1'> {userstd.age} </p><br />
              <strong>Email:</strong><p className='text1'> {userstd.email} </p><br />
              <strong>typeofuser:</strong><p className='text1'> {userstd.typeofuser} </p><br />
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Profile;
