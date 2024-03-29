import React from "react";
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from "emailjs-com";



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_gmq4lue', 'template_dp2zk1g', form.current, 'WCB-ePr9N_Vjrf8MV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>hala.almasharfeh@gmail.com</h5>
            <a href="mailto:hala.almasharfeh@gmail.com" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your Full Name" required/>
          <input type='email' name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
