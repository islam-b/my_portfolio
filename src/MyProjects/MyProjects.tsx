import React from 'react';
import './MyProjects.scss'

export const MyProjects = () => {
    return <>
        <div className="p-5 d-flex flex-column align-items-center justify-content-start">

            <h2 className="my-3" style={{ fontWeight: 'bold' }}>MY PROJECTS</h2>
            <div className="mb-4 horizontal-line">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>

            <ul className="my-4 list-inline text-center about-work">
                <li className="active list-inline-item  text-muted">All</li>
                <li className="   text-muted"><span>&#8226;</span></li>
                <li className="list-inline-item   text-muted">Web</li>
                <li className="  text-muted"><span>&#8226;</span></li>
                <li className="list-inline-item  text-muted">Mobile</li>
                <li className="  text-muted"><span>&#8226;</span></li>
                <li className="list-inline-item   text-muted">Backend</li>
                <li className="   text-muted"><span>&#8226;</span></li>
                <li className="list-inline-item  -muted">IoT</li>
                <li className="  text-muted"><span>&#8226;</span></li>
                <li className="list-inline-item  text-muted">Design</li>
            </ul>

            <div className="container">
                <div className="w-100 px-4">
                    <div className="my-4 row w-100">
                        <div className="col-md-6 col-xl-4 p-4">
                            <div style={{ borderRadius: '4px', overflow: 'hidden' }} className="project-preview-container w-100">
                                <div className="project-preview" style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '300px', backgroundImage: 'url(assets/image1.jpeg)' }}>

                                </div>
                                <h5 className="title">
                                    <span></span>
                                    Wayfar
                                </h5>
                                <h6 className="subtitle">
                                    <span></span>
                                    Parking mobile app
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 p-4">
                            <div style={{ borderRadius: '4px', overflow: 'hidden' }} className="project-preview-container w-100">
                                <div className="project-preview" style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '300px', backgroundImage: 'url(assets/image2.png)' }}>

                                </div>
                                <h5 className="title">
                                    <span></span>
                                    Wayfar
                                </h5>
                                <h6 className="subtitle">
                                    <span></span>
                                    Parking mobile app
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 p-4">
                            <div style={{ borderRadius: '4px', overflow: 'hidden' }} className="project-preview-container w-100">
                                <div className="project-preview" style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '300px', backgroundImage: 'url(assets/image1.jpeg)' }}>

                                </div>
                                <h5 className="title">
                                    <span></span>
                                    Wayfar
                                </h5>
                                <h6 className="subtitle">
                                    <span></span>
                                    Parking mobile app
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </div >

         
    </>
}