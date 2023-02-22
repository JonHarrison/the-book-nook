import React, { useRef } from 'react'
import { Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

import { emailJSConfig } from '../../config/emailJS'

import './style.css'
//Email JS is used below to allow users to send their messages if needed
const ContactPage = () => {
  const form = useRef();

  // implement a Bootstrap alert with a state variable
  //  ( result ? <Alert key="email-alert" variant="success">Message sent!</Alert> : <Alert key="email-alert" variant="danger">Message failed, try again!</Alert>)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(emailJSConfig.serviceId, emailJSConfig.templateId, form.current, emailJSConfig.publicKey)
      .then((result) => {
        console.log(result.text);
        // alert("message sent !")
      }, (error) => {
        console.log(error.text);
        // alert("message failed try again !")
      });
    form.current.reset();
  }

  const rowwidth = { width: '100%', maxWidth: '450px' };
  // Contact us form for users, linked to Email JS
  return (
    <div>
      <h1 className='py-3'>We'd love to hear from you</h1>
      <div className="container mt-5">
        <div className="Row">
          <Form className="ContactForm" ref={form} onSubmit={sendEmail}>
            <div style={rowwidth}>
              <Form.Group as={Row} className="mb-3 " controlId="contactForm.nameInput">
                <Form.Label className='text-white'>Name</Form.Label>
                <Form.Control
                  name="user_name"
                  type="text"
                  placeholder="enter name"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="contactForm.emailInput">
                <Form.Label className='text-white'>Email</Form.Label>
                <Form.Control
                  name="user_email"
                  type="email"
                  placeholder="enter email address"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="contactForm.messageInput">
                <Form.Label className='text-white'>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  type="textarea"
                  placeholder="enter text here"
                />
              </Form.Group>
              <input className="btn w-100 contactButton" type="submit" value="Send" />
            </div>
          </Form>
        </div>
        <div className="Row py-3">
          <div className="d-flex justify-content-md-end ">
            <div className="card py-3 h-100 w-100 bg-secondary contactInfo">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <h4 className="m-0">Email</h4>
                <hr className="my-3" />
                <a className="medium text-black-50" href="#!">11233@gmail.com</a>
              </div>
            </div>
            <div className="card py-3 h-100 w-100 bg-secondary contactInfo">
              <div className="card-body text-center">
                <div>
                  <FontAwesomeIcon icon={faPhoneFlip} />
                </div>
                <h4 className="m-0">Phone</h4>
                <hr className="my-3" />
                <div className="medium text-black-50">+44 (800) 45454885 </div>
              </div>
            </div>
            <div className="card py-3 h-100 w-100 bg-secondary contactInfo">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <h4 className="m-0"> Address</h4>
                <hr className="my-3" />
                <div className="medium text-black-50">12132 Place Street, England</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactPage