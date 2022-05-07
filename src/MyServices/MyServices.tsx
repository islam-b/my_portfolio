import React from 'react';
import './MyServices.scss'

export const MyServices = () => {
    return <>
        <div className="services-container p-5 d-flex flex-column align-items-center justify-content-start">
            <h2 className="my-3" style={{ fontWeight: 'bold' }}>MY SERVICES</h2>
            <div className="mb-4 horizontal-line">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <div className="container">
                <div className="w-100 px-4">
                    <div className="my-4 w-100 row justify-content-center align-items-stretch">
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-service m-3 p-3">
                                <div className="my-2 icon-container">
                                    <img src="assets/ui.png" />
                                </div>
                                <h6 className="my-2">UX/UI Design</h6>
                                <div className="my-2 horizontal-line">
                                    <div className="top"></div>
                                </div>
                                <div className="my-2 service-text" >
                                    There are many variatio
                                    ns of pssages of Lorm available, bu in some form,
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-service m-3 p-3">
                                <div className="my-2 icon-container">
                                    <img src="assets/web.png" />
                                </div>
                                <h6 className="my-2">Frontend development</h6>
                                <div className="my-2 horizontal-line">
                                    <div className="top"></div>
                                </div>
                                <div className="my-2 service-text" >
                                    There are many variatio
                                    ns of pssages of Lorm available, bu in some form,
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-service m-3 p-3">
                                <div className="my-2 icon-container">
                                    <img src="assets/backend.png" />
                                </div>
                                <h6 className="my-2">Backend development</h6>
                                <div className="my-2 horizontal-line">
                                    <div className="top"></div>
                                </div>
                                <div className="my-2 service-text" >
                                    There are many variatio
                                    ns of pssages of Lorm available, bu in some form,
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-service m-3 p-3">
                                <div className="my-2 icon-container">
                                    <img src="assets/mobile.png" />
                                </div>
                                <h6 className="my-2">Mobile development</h6>
                                <div className="my-2 horizontal-line">
                                    <div className="top"></div>
                                </div>
                                <div className="my-2 service-text" >
                                    There are many variatio
                                    ns of pssages of Lorm available, bu in some form,
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>

        </div>
    </>
}