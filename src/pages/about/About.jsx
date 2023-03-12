import React from 'react';
import './About.scss';
import AboutConstructor from '../../assets/images/img-constructor.svg';

export default function About() {
  return (
    <React.Fragment>
        <div className="re-about">
          <img src={AboutConstructor} alt="About" />
        </div>
    </React.Fragment>
  )
}
