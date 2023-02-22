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

  }

  const rowwidth = { width: '100%', maxWidth: '450px' };

  return (
    <div>
      <h1>Have a question</h1>
      <div className="container mt-5">
        <div className="Row">
          <Form className="ContactForm" ref={form} onSubmit={sendEmail}>
            <div style={rowwidth}>
              <Form.Group as={Row} className="mb-3 " controlId="contactForm.nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="user_name"
                  type="text"
                  placeholder="enter name"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="contactForm.emailInput">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="user_email"
                  type="email"
                  placeholder="enter email address"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="contactForm.messageInput">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  type="textarea"
                  placeholder="enter text here"
                />
              </Form.Group>
              <input className="btn btn-primary w-100" type="submit" value="Send" />
            </div>
          </Form>
        </div>
        <div className="Row">
          <div className="d-flex justify-content-md-end">
            <div className="card py-4 h-100 w-100 bg-secondary">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <h4 className="m-0">Email</h4>
                <hr className="my-4" />
                <div className="small ">
                  <a className="text-black-50" href="#!">11233@gmail.com</a></div>
              </div>
            </div>
            <div className="card py-4 h-100 w-100 bg-secondary">
              <div className="card-body text-center">
                <div>
                  <FontAwesomeIcon icon={faPhoneFlip} />
                </div>
                <h4 className="m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+44 (800) 45454885 </div>

              </div>
            </div>
            <div className="card py-4 h-100 w-100 bg-secondary">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <h4 className="m-0">  Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">12132 gggh street, England</div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactPage