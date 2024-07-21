import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        If you have any questions or need assistance with the Islamic Meme Generator, please feel free to contact us:
      </p>
      <ul className="contact-details">
        <li>Email: <a href="mailto:mohamedcabdicali06@email.com">mohamedcabdicali06@email.com</a></li>
        <li>Phone: <a href=" tel:+252613739601">+252613739601</a></li>
        <li>Phone: <a href="tel:+252619640433">++252619640433</a></li>
        <li>Address: 06 meme Street, Muqdisho, Somalia</li>
      </ul>
      <p className="contact-social-description">
        You can also follow us on social media:
      </p>
      <ul className="contact-social">
        <li>Facebook: <a href="https://www.facebook.com/profile.php?id=100048771496307&mibextid=ZbWKwL">Islamic Meme Generator</a></li>
        <li>WhatsApp: <a href="http://Wa.me/+252619640433">Islamic Meme Generator</a></li>
        <li>TikTok: <a href="https://www.tiktok.com/@">Islamic Meme Generator</a></li>
      </ul>
    </div>
  );
}

export default Contact;








































































































// import React from "react";
// import { Link } from "react-router-dom";


// const socialLinks = [
//   {
//     url: "https://www.facebook.com",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "https://www.instagram.com",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "https://www.tiktok.com",
//     icon: "ri-tiktok-line",
//   },
//   {
//     url: "https://wa.me/yourphonenumber",
//     icon: "ri-whatsapp-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7 col-md-7">
//             <h6 className="fw-bold mb-4">Get In Touch</h6>

//             <form>
//               <div className="contact__form">
//                 <input placeholder="Your Name" type="text" />
//               </div>
//               <div className="contact__form">
//                 <input placeholder="Email" type="email" />
//               </div>
//               <div className="contact__form">
//                 <textarea
//                   rows="5"
//                   placeholder="Message"
//                   className="textarea"
//                 ></textarea>
//               </div>

//               <button className="contact__btn" type="submit">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="col-lg-5 col-md-5">
//             <div className="contact__info">
//               <h6 className="fw-bold">Contact Information</h6>
//               <p className="section__description mb-0">
//                 Kaaraan, Mogadishu, Somalia
//               </p>
//               <div className="d-flex align-items-center gap-2">
//                 <h6 className="fs-6 mb-0">Phone:</h6>
//                 <p className="section__description mb-0">+252 619640433</p>
//               </div>

//               <div className="d-flex align-items-center gap-2">
//                 <h6 className="mb-0 fs-6">Email:</h6>
//                 <p className="section__description mb-0">
//                   meme@gmail.com
//                 </p>
//               </div>

//               <h6 className="fw-bold mt-4">Follow Us</h6>

//               <div className="d-flex align-items-center gap-4 mt-3">
//                 {socialLinks.map((item, index) => (
//                   <Link
//                     to={item.url}
//                     key={index}
//                     className="social__link-icon"
//                   >
//                     <i className={item.icon}></i>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




