import React from 'react'

const Footer = () => {
    return (
        <div className="container ">
            <div className="row mt-5 mb-5">
                <div className="col-4 ps-5">
                    <h5>Topics</h5>
                    <ul className="list-unstyled">
                        <li>FINANCE</li>
                        <li>NEWS</li>
                        <li>BUSSINESS</li>
                        <li>ENTERTAINEMENT</li>
                        <li>SCIENCE</li>
                    </ul>
                </div>
                <div className="col-4 ps-5">
                    <h5>Contact</h5>
                    <ul className="list-unstyled">
                        <li>Report an article</li>
                        <li>Contact us</li>
                        <li>About me</li>
                    </ul>
                </div>
                <div className="col-4 ps-5">
                    <h5>Follow us</h5>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
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
