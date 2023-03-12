import React from 'react';
import './Recovery.scss';
import RecoveryConstructor from '../../assets/images/img-constructor.svg';

export default function Recovery() {
  return (
    <React.Fragment>
        <div className="re-recovery">
          <img src={RecoveryConstructor} alt="Recovery" />
        </div>
    </React.Fragment>
  )
}