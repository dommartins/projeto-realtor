import React from 'react';
import './Register.scss';
import RegisterConstructor from '../../assets/images/img-constructor.svg';

export default function Register() {
  return (
    <React.Fragment>
        <div className="re-register">
          <img src={RegisterConstructor} alt="Register" />
        </div>
    </React.Fragment>
  )
}