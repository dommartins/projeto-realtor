import React from 'react';
import './Blog.scss';
import BlogConstructor from '../../assets/images/img-constructor.svg';

export default function Blog() {
  return (
    <React.Fragment>
        <div className="re-blog">
          <img src={BlogConstructor} alt="Blog" />
        </div>
    </React.Fragment>
  )
}