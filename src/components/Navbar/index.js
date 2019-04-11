import React, {Component} from 'react';
import $ from 'jquery';
import "./styles.scss";

export default class Navbar extends Component{
    componentDidMount () {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar.fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > 200);
            });
        });
    }

    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#AJUSTAR">one</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#AJUSTAR">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#AJUSTAR">need help</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#AJUSTAR" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        want to help
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#AJUSTAR">Volunteer</a>
                                        <a className="dropdown-item" href="#AJUSTAR">Send money</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#AJUSTAR">Other</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#AJUSTAR">calendar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#AJUSTAR">gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#AJUSTAR">Links</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}