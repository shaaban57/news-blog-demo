import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                <div className="cn-card">
                    <div className="row">
                    <div className="contact-card col-md-9 shadow-lg ">
                        <div className="h2 text-center mb-5 title">Contact us</div>
                        <div className="container">
                        <div className="row">
                            <div className="cn-form  col-lg-6">
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floating-email" placeholder="name@example.com"/>
                                <label for="floating-email"><i className="fa fa-envelope"></i>   Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floating-subject" placeholder="subject"/>
                                <label for="floating-subject"><i className="fa fa-file-archive "></i> Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floating-name" placeholder="name"/>
                                <label for="floating-name"><i className="fa fa-user "></i> Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="text" className="form-control" id="floating-text-area" placeholder="this is a demo contact form"></textarea>
                                <label for="floating-text-area"><i className="fa fa-comment"></i>Message</label>
                            </div >
                            <div className="text-center mb-3">
                            <button className="btn btn-primary" >Send</button>
                            </div>
                            </div>
                            <div className="my-info  col-lg-6">
                            <div>
                                <h3>Address</h3>
                                <p>Syria, Homs, AlArman</p>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+963 931 861 238</p>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:shaaaban9@gmail.com">shaaaban9@gmail.com</a></p>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
            </div></div></div>
            </section>
        </div>
    )
}

export default ContactUs
