// home.js

import "./styles.css";
import News from "./news";
import Slide from "./slide";
import Nav from 'react-bootstrap/Nav';


// import Card from 'react-bootstrap/Card';




export default function Home() {




  return (
    <>
      <div id="hom">
        <div className="news-container-homepg">
          <News />
        </div>
        {/* <img src={require('./download.jpg')} alt='error' /> */}
        {/* <img src={imageUrl} alt='error' /> */}
        <p>
          <p id="about">

            <section id="slideimg"><Slide /></section>
            <h4 id="home-head">RVS HOSTEL FOR MEN AND WOMEN</h4>
            <br />

            <section id="abutcol">
              <li>• Each Student is s provided with a cot, a table and a chair</li>
              <li>• Reading room displays news papers, periodicals and popular magazines.</li>
              <li>• 24 hrs standby Generator facility is available.</li>
              <li>• Wifi is available within the campus</li>
                <br />
              RVS College of Arts and Science, affiliated to Bharathiar University, Coimbatore,
              offer career-oriented education leading to graduation, post-graduation and research degrees in Arts and Science disciplines.
              Founded on 31st October, 1986, it has grown exuberantly to become one of the biggest self- financing colleges.
              The college was accorded autonomous status in 2004 by UGC and re-accredited in 2023 with an 'A+' Grade.

              The courses have been framed meticulously under autonomous system, to meet the demands of the industry.
              They also cater to the expectations of the present generation. The design and development of the curriculum was meticulously monitored by
              the respective Departments of the college. The College has on its roll a team of talented, dedicated and competent faculty adept in industry experience as well.

              The College offers Bachelors, Masters and Research programs in various streams like Computer Science, Electronics, Management, Commerce,
              English Literature, Mathematics and Life Sciences.

              More Career-Oriented programs have been introduced incorporating Animation and Visual Effects,
              Oracle and Networking for students to enhance their knowledge facilitating provision for a multi-dimensional career path.
              <br />
              <br />
              <br /> <br />
            </section>
            <Nav.Link href="#/prelogin">
              <label className='enrollbtn'>USERS LOGIN</label>
            </Nav.Link>
            <Nav.Link href="#/adminlogin">
              <label className='adminbt'>ADMIN LOGIN</label>
            </Nav.Link>
          </p>
        </p><br />

        {/* 
      <Card style={{ width: '21rem' }} className="car">
        <Card.Img variant="top" src={imageUrl} className="carim" />
        <Card.Body>
          <Card.Title className="logtxt">Admin Login</Card.Title><br />
          <Card.Text>
            Personal
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '21rem' }} className="car">
        <Card.Img variant="top" src={imageUrl} className="carim" />
        <Card.Body>
          <Card.Title className="logtxt">Staff Login</Card.Title><br />
          <Card.Text>
            Personal
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '21rem' }} className="car">
        <Card.Img variant="top" src={imageUrl} className="carim" />
        <Card.Body>
          <Card.Title className="logtxt">Student Login</Card.Title><br />
          <Card.Text>
            Personal
          </Card.Text>
        </Card.Body>
      </Card> */}
      </div>
    </>
  )
}