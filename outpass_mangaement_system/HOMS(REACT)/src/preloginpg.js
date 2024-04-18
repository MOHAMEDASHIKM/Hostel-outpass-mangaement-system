// prelogin.js
import React, { useState } from 'react';
import "./styles.css";
import News from './news';
import Nav from 'react-bootstrap/Nav';


const PreLogin = () => {



  return (
    <div id="hom">
       <div className="news-container">
        <News />
       </div>
      <div className="signup-container">
        <h2>LOGINS</h2>

        {/* <Nav.Link href="#/preapply"> */}
        <Nav.Link href="#/stafflogin">
          <label className='prelog1'>STAFF LOGIN</label>
        </Nav.Link>
        <Nav.Link href="#/wardenlogin">
          <label className='prelog2'>WARDEN LOGIN</label>
        </Nav.Link> 
        <Nav.Link href="#/login">
          <label className='prelog3'>STUDENTS LOGIN</label>
        </Nav.Link>
        
      </div>
      
    </div>
  );
};

export default PreLogin;
