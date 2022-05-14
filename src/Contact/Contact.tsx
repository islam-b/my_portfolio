import React from 'react';
import './Contact.scss'

export const Contact = () => {
    return <>
        <div className="container p-5">

            <div className="row w-100 align-items-end">
                <div className="col-md-6 p-5">
                    <h2 className="my-3" style={{ fontWeight: 'bold' }}>GET IN TOUCH</h2>
                    <div className="mb-4 horizontal-line">
                        <div style={{ margin: "unset" }} className="top"></div>
                        <div className='my-1'></div>
                        <div style={{ margin: "unset" }} className="bottom"></div>
                    </div>

                    <div className='my-3'>
                        There are many variations of pssges of Lorem Ipsum available, bu in some form, by
                    </div>

                    <div className='my-4'>
                        <div className=" my-3 d-flex flex-row align-items-center">
                            <div className="contact-icon">
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className='mx-2'></div>
                            <div>
                                <h6 className="mb-0">Phone</h6>
                                <label>+213 799112083</label>
                            </div>
                        </div>
                        <div className=" my-3 d-flex flex-row align-items-center">
                            <div className="contact-icon">
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <div className='mx-2'></div>
                            <div>
                                <h6 className="mb-0">Email</h6>
                                <label>ibouayache@gmail.com</label>
                            </div>
                        </div>
                        <div className=" my-3 d-flex flex-row align-items-center">
                            <div className="contact-icon">
                                <i className="bi bi-geo-alt-fill"></i>                            </div>
                            <div className='mx-2'></div>
                            <div>
                                <h6 className="mb-0">Location</h6>
                                <label>Algiers, Algeria</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 p-4">
                    <div className="row">
                        <div className="col-lg-6 p-2">
                            <label>Full name</label>
                            <input type="text" className="form-control" placeholder="Your name" />

                        </div>
                        <div className="col-lg-6 p-2">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-2">
                            <label>Message</label>
                            <textarea className="form-control" placeholder="Your message" style={{ height: '100px' }}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-2">
                            <button type="button" className="btn btn-dark my-3 ">
                                <div className="px-2">SEND MESSAGE</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}