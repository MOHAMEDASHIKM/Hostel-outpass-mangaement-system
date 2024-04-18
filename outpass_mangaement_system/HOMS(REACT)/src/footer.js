
// import Container from 'react-bootstrap/Container';
import "./color.css";

// import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
// import Nav from 'react-bootstrap/Nav';

// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Footer() {


    const cologo = 'https://www.rvscas.ac.in/static/media/CAS.3ce22d16.webp';


    return (
        <>
            {/* nav bar from bootstap */}
            <div id='botm'>
                <div id="footertitbox">
                    <img src={cologo} alt='error' id='cologos' />
                    <h1 className="footertit">RVS Hostel For Men And Women</h1>
                        <h1 className='footersubtit'>Autonomous and Affiliated to Bharathiar University, Approved by AICTE
                            Re Accredited with 'A+' Grade by NAAC</h1>
                </div>
                
                <div id="footerad">
                    <p id="footercont"> Contact Us -
                        242, Trichy Road, Sulur, Coimbatore, TamilNadu, India
                        Office: 0422 2687 421
                        Mobile: +91 80121 33444 || +91 97153 74000
                        <br />
                        © 2024 RVSCAS. All Rights Reserved

                    </p>
                </div>
            </div>
        </>
    );
}