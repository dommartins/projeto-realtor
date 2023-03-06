import React from 'react';
import './Navigation.scss';
import Brand from '../../assets/icons/brand-default.svg';
import { FiSearch } from 'react-icons/fi';
import { ImMenu } from 'react-icons/im';
import { ButtonsSmallBlack, ButtonsSmallWhite } from '../buttons/Buttons';
import Search from '../search/Search';
import NavigationMobile from '../navigation-mobile/NavigationMobile';

export default function Navigation() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg py-4 re-navigation">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={Brand} alt="Brand" />
                    </a>
                    <div className="d-flex align-items-center">
                        <a class="nav-link re-icon-search me-4 re-search-mobile" href="" data-bs-toggle="modal" data-bs-target="#re-search">
                            <FiSearch />
                        </a>
                        <button class="navbar-toggler re-menu border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#re-mobile" aria-controls="offcanvasRight">
                            <ImMenu />
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
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
                        </ul>
                        <ul class="navbar-nav d-flex align-items-center">
                            <li class="nav-item">
                                <a class="nav-link re-icon-search" href="" data-bs-toggle="modal" data-bs-target="#re-search">
                                    <FiSearch />
                                </a>
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
            </nav>
            <Search />
            <NavigationMobile />
        </React.Fragment>
    )
}
