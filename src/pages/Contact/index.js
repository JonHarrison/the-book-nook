import React, { useRef } from 'react'
import { Form, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

import './style.css'

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', form.current, 'EMAILJS_PUBLIC_KEY')
    emailjs.sendForm('service_kpygos7', 'template_m18vp5a', form.current, 'n7tvtgx4vKN8hvoeb')
      .then((result) => {
        console.log(result.text);
        alert("message sent !")
      }, (error) => {
        console.log(error.text);
        alert("message failed try again !")
      });
    form.current.reset();
  }

  const rowwidth = { width: '100%', maxWidth: '450px' };

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