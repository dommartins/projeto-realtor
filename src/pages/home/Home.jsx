import React from 'react';
import './Home.scss';
import HomeConstructor from '../../assets/images/img-constructor.svg';
export default function Home() {
  return (
    <React.Fragment>
        <div className="re-home">
          <img src={HomeConstructor} alt="Home" />
        </div>
    </React.Fragment>
  )
}
