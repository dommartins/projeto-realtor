import React from 'react';
import './NavigationMobile.scss';
import Brand from '../../assets/icons/brand-default.svg';
import { ButtonsSmallBlack, ButtonsSmallWhite } from '../buttons/Buttons';

export default function NavigationMobile() {
    return (
        <React.Fragment>
            <div class="offcanvas offcanvas-end re-navigation-mobile" tabindex="-1" id="re-mobile" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        <img src={Brand} alt="Brand" />
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/properties">Properties</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/agents">Agents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">
                                <ButtonsSmallBlack description="Login" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">
                                <ButtonsSmallWhite description="Register" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
