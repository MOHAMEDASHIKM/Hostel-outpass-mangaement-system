
import Container from 'react-bootstrap/Container';
import "./styles.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Nav2() {
 
 

 
  const [token, setToken] = useState(localStorage.getItem("token")); // Initialize with localStorage value

  useEffect(() => {
    // Fetch token from localStorage
    let GetToken = localStorage.getItem("token");
    if (GetToken !== token) {
      setToken(GetToken);
    }
  }, [token]);

// console.log(token);
  const cologo = 'https://www.rvscas.ac.in/static/media/CAS.3ce22d16.webp';

  return (
    <>
      {/* nav bar from bootstap */}
      <div id='navb'>
      {/* <marquee>International Accreditation and Recognition for Excellent Learning Outcomes</marquee> */}

        <Navbar bg="background-color: rgb(190, 0, 0);" expand="lg">
          <Container fluid>
            <img src={cologo} alt='error' id='cologo' />
            <Navbar.Brand href="#/Home"><h3>RVS HOSTEL FOR MEN AND WOMEN </h3>
            <h1 className='subtit'>HOSTEL AT SULUR - COIMBATORE </h1>
              </Navbar.Brand> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '150px' }}
                navbarScroll
              >
                <Nav.Link href="#/Home" className='navtxt'>HOME</Nav.Link>
                <Nav.Link href="#/gallery" className='navtxt'>DETAILS</Nav.Link>
                <Nav.Link href="#/contact" className='navtxt'>CONTACT </Nav.Link> 
               {
                token ? 
         
          <Nav.Link href="#/prelogin" className='navtxt'onClick={()=>{localStorage.clear('token'); alert("logouted succesfully"); }}>LOGOUT </Nav.Link>
              :null
              }
                <br/>
                {/* <Nav.Link href="#/notes" className='navtxt'>test </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}