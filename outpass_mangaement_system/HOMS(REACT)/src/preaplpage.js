
import React, { useState } from 'react';
import News from './news';
import "./styles.css";
import Nav from 'react-bootstrap/Nav';


const Preapp = () => {



  return (
    <div id="hom">
      <div className="news-container">
      <News />
      </div>
      <div className="signup-container">
        <h2>NEW OUTPASS</h2>
        <br />
        
        <Nav.Link href="#/Noteform">
          <label className='prelog1'>APPLY NEW</label>
        </Nav.Link>
        <br />
        <Nav.Link href="#/notes">
          <label className='prelog3'> VIEW ALL PASS   </label>
        </Nav.Link>
         {/* <Nav.Link href="#/profile">
          <label className='prelog3'>STUDENT-PROFILE</label>
        </Nav.Link> */}
      </div>

    </div>
  );
};

export default Preapp;
