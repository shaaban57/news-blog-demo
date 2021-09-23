import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="container footer bg-white pt-2 ps-5 mt-4">
            <div className="row mt-5 mb-5">
                <div className="col-md-4 col-sm-6 ">
                    <h5>Topics</h5>
                    <ul className="list-unstyled">
                        <li><Link className="nav-link" to="/finance">FINANCE</Link></li>
                        <li><Link className="nav-link" to="/news">NEWS</Link></li>
                        <li><Link className="nav-link" to="/business">BUSINESS</Link></li>
                        <li><Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link></li>
                        <li><Link className="nav-link" to="/science">SCIENCE</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 ">
                    <h5>Contact</h5>
                    <ul className="list-unstyled">
                        <li><Link className="nav-link" to="/">Report an article</Link></li>
                        <li><Link className="nav-link" to="/">Contact us</Link></li>
                        <li><Link className="nav-link" to="/">About me</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 ">
                    <h5>Follow us</h5>
                    <ul className="list-unstyled">
                        <li><Link className="nav-link" to="/">Facebook</Link></li>
                        <li><Link className="nav-link" to="/">Instagram</Link></li>
                        <li><Link className="nav-link" to="/">Twitter</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row mb-2">
                <footer className="footer" id="footer">
                    <div className="container text-center">
                        <a className="cc-facebook btn btn-link" href="https://www.facebook.com/shaaban.altamer" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f fa-2x " aria-hidden="true"></i>
                        </a>
                        <a className="cc-instagram btn btn-link" href="https://www.instagram.com/shaaban.altamer" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-2x " aria-hidden="true"></i>
                        </a>
                        <a className="cc-twitter btn btn-link" href="https://www.twitter.com/shaaban.altamer" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter fa-2x " aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="h4 title text-center">Shaaban Altamer</div>
                    <div className="text-center text-muted">
                        <p>© Shaaban Altamer. All rights reserved.<br/>+963 931 861 238</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
