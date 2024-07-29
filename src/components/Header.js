import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return ( 

        <>

            <header className="header">

                <div className="header__top">


                    <div className="header__logo">
                        <Link to="/">
                            <img src="./img/logo_horizontal.png" alt="logo Wellfit"/>
                        </Link>
                    </div>

                    {/*<!--iconos de redes sociales-->*/}

                    <ul className="social-icons">
                        <li className="social-icon">
                            <Link to="https://www.facebook.com/thewellfitsociety/" target="_blank">
                                <img src="./img/icons/facebook.png" alt="facebook"/>
                            </Link>
                        </li>
                        <li className="social-icon">
                            <Link to="#">
                                <img src="./img/icons/x.png" alt="x twitter"/>
                            </Link>
                        </li>
                        <li className="social-icon">
                            <Link to="https://www.instagram.com/thewellfitsociety/" target="_blank">
                                <img src="./img/icons/instagram.png" alt="instagram"/>
                            </Link>
                        </li>
                        <li className="social-icon">
                            <Link to="#">
                                <img src="./img/icons/tiktok.png" alt="tiktok"/>
                            </Link>
                        </li>
                        <li className="social-icon">
                            <Link to="#">
                                <img src="./img/icons/youtube.png" alt="youtube"/>
                            </Link>
                        </li>
                        <li className="social-icon">  
                            <Link to="#">
                                <img src="./img/icons/pinterest.png" alt="pinterest"/>
                            </Link>
                        </li>
                    </ul>

                    {/*<!--icono y links de login/signup-->*/}

                    <div className="header__loging">
                        <Link to="#">
                            <img className="login-img" src="./img/icons/user.png" alt="user icon"/>
                        </Link>

                        <ul className="header__login-signup">
                            <li>
                                <Link to="#">Log In</Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link to="#">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*<!--navbar de boostrap-->*/}

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand header__navbar-item" to="/">Menú</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav header__navbar-list">
                                <li className="header__navbar-item">
                                    <Link to="/">INICIO</Link>
                                </li>
                                <li className="header__navbar-item">
                                    <Link to="/lifestyle">LIFESTYLE</Link>
                                </li>
                                <li className="header__navbar-item">
                                    <Link to="wellness">WELLNESS</Link>
                                </li>
                                <li className="header__navbar-item">
                                    <Link to="/fitness">FITNESS</Link>
                                </li>
                                <li className="header__navbar-item">
                                    <Link to="/tech">TECH</Link>
                                </li>

                                <li className="header__navbar-item">
                                    <Link to="/contact">CONTACTO</Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>

    );
}

export default Header