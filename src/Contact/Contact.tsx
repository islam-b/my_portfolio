import { Formik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { EmailJs } from '../EmailJs';
import './Contact.scss'

const initialValues = {
    fullName: '',
    email: '',
    content: ''
}

export const Contact = () => {

    useEffect(() => {
        EmailJs.init()
    }, [])

    let onSubmit = ({ fullName, email, content }: any) => {
        EmailJs.send(fullName, email, content).then((res) => {
            console.log(res);
            (formikRef?.current as any)?.resetForm()
        }).catch(error => {
            console.log(error)
        })
    }

    const formikRef = useRef<any>();


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
                    <Formik innerRef={formikRef} initialValues={initialValues} onSubmit={onSubmit}>

                        {({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting }) => (<>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 p-2">
                                            <label>Full name</label>
                                            <input type="text" className="form-control"
                                                name="fullName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.fullName}
                                                placeholder="Your name" />

                                        </div>
                                        <div className="col-lg-6 p-2">
                                            <label>Email</label>
                                            <input type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className="form-control" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-2">
                                            <label>Message</label>
                                            <textarea className="form-control"
                                                name="content"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.content}
                                                placeholder="Your message" style={{ height: '100px' }}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-2">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-dark my-3 ">
                                                <div className="px-2">SEND MESSAGE</div>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </>)}
                    </Formik>

                </div>
            </div>
        </div>
    </>
}