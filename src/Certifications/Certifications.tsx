import React from 'react';
import './Certifications.scss'

export const Certifications = () => {
    return <>
        <div className="certifications-container p-5 d-flex flex-column align-items-center justify-content-start">
            <h2 className="my-3" style={{ fontWeight: 'bold' }}>MY CERTIFICATIONS</h2>
            <div className="mb-4 horizontal-line">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <div className="container">
                <div className="w-100 px-4">
                    <div className="my-4 w-100 row justify-content-center align-items-stretch">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="single-certification m-3 ">

                                <div style={{ flex: 1, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '300px', backgroundImage: 'url(assets/AAD.png)' }}>

                                </div>

                                <div className="p-2 d-flex flex-row justify-content-between">
                                    <div className="service-text" >
                                        <small> <i className="bi bi-calendar-check"></i> 8 Mar 2022 </small>
                                    </div>
                                    <div className="service-text">
                                        <small> <i className="bi bi-hash"></i> 911 </small>
                                    </div>
                                </div>
                                <div className="divider">
                                    <div className="top"></div>
                                </div>
                                <div  className="p-3 d-flex flex-row justify-content-between">
                                     
                                        <h6 style={{fontWeight:'bold'}} className="my-1">
                                            <i className="mx-2 bi bi-patch-check"></i> Android Associate Developer
                                        </h6>
                                     
                                    <div></div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </>
}