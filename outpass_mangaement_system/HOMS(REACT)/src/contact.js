import "./styles.css";
import News from "./news";

// import Card from 'react-bootstrap/Card';




export default function Contact() {



    return (
        <>
            <div id="hom">

                <p>
                    <p id="aboutimg">

                        <h4 id="home-head">HOSTEL LOCATION </h4>
                        <br />
                        <p id="abutcol">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.0708691967043!2d77.1316308908678!3d11.027990703232414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba855d839321127%3A0xedfb5f33a5832a60!2sRVS%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1709656380875!5m2!1sen!2sin"
                                width="750"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RVS College of Arts & Science Map"
                            ></iframe>
                        </p>

                        <h4 id="home-head">CONTACT US </h4>
                        <br />
                        <section id="con-box">
                            <p id="con-txt1">

                                <span> Phone: <br /></span>
                                0422 2687 421<br />
                                0422 2687 480<br />
                                0422 2687 603<br /><br />

                                <span>Mobile:<br /></span>
                                +91 80121 33444<br />
                                +91 97153 74000<br /><br />


                            </p>
                            <p id="con-txt2">
                                <span>Email:<br /></span>
                                info@rvsgroup.com<br /><br />

                                <span>Location :<br /></span>
                                242, Trichy Road,<br />
                                Sulur,<br />
                                Coimbatore – 641 402.<br />
                                Tamilnadu,<br />
                                South India.
                                <br /><br />

                            </p>
                            <p id="con-txt3">

                                For Admission Enquiry call us on

                                logo 
                                <span id="span-num">
                                   - 99760 21000
                                </span>
                            </p>
                        </section>
                    </p>
                </p><br />

            </div >
        </>
    )
}