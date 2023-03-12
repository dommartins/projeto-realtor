import React from 'react';
import './Login.scss';
import LoginConstructor from '../../assets/images/img-constructor.svg';

export default function Login() {
  return (
    <React.Fragment>
        <div className="re-login">
          <img src={LoginConstructor} alt="Login" />
        </div>
    </React.Fragment>
  )
}