import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0zxw9uh', 'template_x8wooxq', form.current, 'QSiOfMc_lDh7aLNVS')
      .then(() => {
        toast.success('✅ Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
        form.current.reset();
      }, () => {
        toast.error('❌ Failed to send message. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      });
  };

  return (
    <div id='Contact' className="contact-container dark-mode">
      <ToastContainer />
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p className="contact-description">Want to get in touch with me? I'd love to hear from you!</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </div>
        </form>
      </div>
      <div className="contact-right">
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35365.800350753336!2d88.34346378955277!3d22.569898334980383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744787553025!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> Kolkata, West Bengal, India</p>
          <p><i className="fas fa-envelope"></i> urskaransingh4@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
