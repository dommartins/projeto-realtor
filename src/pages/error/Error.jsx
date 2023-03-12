import React from 'react';
import './Error.scss';
import IconError from '../../assets/icons/icon-13.svg';
import { ButtonsDefaultOrange, ButtonsDefaultWhite } from '../../components/buttons/Buttons';

export default function Error() {
  return (
    <React.Fragment>
      <section className="re-error">
        <div className="container">'
          <div className="re-error-content shadow-sm">
            <img src={IconError} alt="Error" />
            <h3>Page not found</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit bortis arcu enim urna adipiscing praesent.</p>
            <div className="d-flex justify-content-center">
              <a href="/" className="me-4"><ButtonsDefaultWhite description="Go Home" /></a>
              <a href="/properties"><ButtonsDefaultOrange description="Browse properties" /></a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
