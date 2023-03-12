import React from 'react';
import './Contact.scss';
import ContactConstructor from '../../assets/images/img-constructor.svg';

export default function Contact() {
  return (
    <React.Fragment>
        <div className="re-contact">
          <img src={ContactConstructor} alt="Contact" />
        </div>
    </React.Fragment>
  )
}