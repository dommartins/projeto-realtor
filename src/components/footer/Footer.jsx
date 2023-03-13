import React from 'react';
import './Footer.scss';
import Brand from '../../assets/icons/brand-default.svg';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { ButtonsDefaultOrange } from '../buttons/Buttons';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="re-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                            <img src={Brand} alt="Brand" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="re-footer-social">
                                <a href=""><GrFacebook /></a>
                                <a href=""><BsInstagram /></a>
                                <a href=""><BsTwitter /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 re-footer-social mb-lg-0 mb-4">
                            <h5>MENU</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/properties">Properties</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/agents">Agents</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 re-footer-social mb-lg-0 mb-4">
                            <h5>TAGS</h5>
                            <span class="badge p-2 m-1">House</span>
                            <span class="badge p-2 m-1">Financing</span>
                            <span class="badge p-2 m-1">Purchase</span>
                            <span class="badge p-2 m-1">New</span>
                        </div>
                        <div className="col-lg-5 col-md-6 re-footer-subscribe">
                            <h5>SUBSCRIBE</h5>
                            <div className="re-footer-form">
                                <input type="text" placeholder="Enter your email address"/>
                                <ButtonsDefaultOrange description="Subscribe"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
