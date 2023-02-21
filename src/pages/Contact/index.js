import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ContactPage = () => {
  return (
    <div>
      <h1>Have a question</h1>
      <div class="container">
        <div class="row">
          <div class="d-flex flex-wrap justify-content-md-end">
            <div class="card py-4 h-100 bg-secondary">
              <div class="card-body text-center">
                <h5 class="text-lowercase m-0">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />  - Email</h5>
                <p />
                <div class="small ">
                  <a class="text-black-50" href="#!">11233@gmail.com</a></div>
                <hr class="my-4" />
                <div class="card-body text-center">
                  <div>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                  </div>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <div class="small text-black-50">+44 (800) 45454885 </div>
                </div>
                <hr class="my-4" />
                <h4 class="text-uppercase m-0">
                  <FontAwesomeIcon icon={faLocationDot} /> - Address</h4>
                <p />
                <div class="small text-black-50">12132 gggh street, England</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactPage