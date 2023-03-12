import React from 'react';
import './Properties.scss';
import PropertiesConstructor from '../../assets/images/img-constructor.svg';

export default function Properties() {
  return (
    <React.Fragment>
        <div className="re-properties">
          <img src={PropertiesConstructor} alt="Properties" />
        </div>
    </React.Fragment>
  )
}