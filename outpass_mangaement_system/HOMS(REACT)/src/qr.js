// import React from 'react';
// import QRCode from 'react-qr-code';

// const MyQRCodeComponent = () => {
//   const data = 'Hello, ashik how are you? '; // Data to be encoded in the QR code

//   return (
//     <div>
//       <h1>My QR Code</h1>
//      <section className='qrcode'>
//       <QRCode value={data} />
//       <br/>
//       <br/>
//       <br/>
//       </section>
//     </div>
//   );
// };

// export default MyQRCodeComponent;












// import React, { useState } from 'react';
// import axios from 'axios';

// const EmailForm = () => {
//   const [emailData, setEmailData] = useState({
//     to: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = e => {
//     setEmailData({ ...emailData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/send-email', emailData);
//       alert('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
//   };

//   return (
//     <section className='test'>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="to"
//         placeholder="To"
//         value={emailData.to}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject"
//         value={emailData.subject}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="message"
//         placeholder="Message"
//         value={emailData.message}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Send Email</button>
//     </form>
//     </section>
//   );
// };

// export default EmailForm;


