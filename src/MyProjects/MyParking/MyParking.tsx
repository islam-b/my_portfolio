
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../MyProjects.scss'


export const MyParking = () => {
    return <div >

        <div className="container px-5">
            <div style={{ marginTop: '200px' }}></div>
            <div className="mt-4">
                <h3 className=" px-2"> MyParking (Parking Guidance App)
                </h3>
            </div>
            <div className="row w-100">

                <div className="col-md-8 p-4">

                    <p className='mb-5'>
                        There are many variatio
                        ns of pssages of Lorm available, bu in some form,There are many variatio
                        ns of pssages of Lorm available, bu in some form,There are many variatio
                        ns of pssages of Lorm available, bu in some form,There are many variatio
                        ns of pssages of Lorm available, bu in some form,There are many variatio
                        ns of pssages of Lorm available, bu in some form,There are many variatio
                        ns of pssages of Lorm available, bu in some form,
                    </p>


                    <h6>
                        <strong> Tech Stack </strong>
                    </h6>
                    <div className='stack'>

                        <img data-tip="Android" data-place='bottom' data-effect="solid" className='tech' src='/assets/tech/android.png' />
                        <img data-tip="Kotlin" data-place='bottom' data-effect="solid" className='tech' src='/assets/tech/kotlin.png' />
                        <img data-tip="Django" data-place='bottom' data-effect="solid" className='tech' src='/assets/tech/django.png' />
                        <img data-tip="MongoDB" data-place='bottom' data-effect="solid" className='tech' src='/assets/tech/mongodb.png' />
                        <img data-tip="here API" data-place='bottom' data-effect="solid" className='tech' src='/assets/tech/here.png' />

                    </div>

                </div>

                <div className="col-md-4 p-4">

                    <div className="row my-2">

                        <div className='col-4'>
                            <small>Language: </small>
                        </div>
                        <div className='col-8'>
                            <strong> French  </strong>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className='col-4'>
                            <small>Launched: </small>
                        </div>
                        <div className='col-8'>
                            <strong> Oct 2020 </strong>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className='col-4'>
                            <small>Completed: </small>
                        </div>
                        <div className='col-8'>
                            <strong> Sep 2021 </strong>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row w-100">
                <div className="col-12 p-4">
                    <h6>
                        <strong> Clients </strong>
                    </h6>
                    <div className="row w-100 mb-5">
                        <div className="col-md-2">
                            <a className="client" data-tip="ESHRA" data-place='bottom' data-effect="solid" href="https://www.eshra.dz/" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src='/assets/clients/eshra.png' />
                            </a>
                        </div>
                        <div className="col-md-2">
                            <a className="client" data-tip="ENA" data-place='bottom' data-effect="solid" href="http://www.ena.dz/index.php/fr/" target="_blank" rel="noopener noreferrer">
                                <img className='logo' src='/assets/clients/ena.png' />
                            </a>
                        </div>

                    </div>



                </div>
            </div>

            <div className='px-3'>
            <div className="row ">
                <div className="col-12 b-4 mb-lg-0">
                    <img
                        src="/assets/projects/sgs/main.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="/assets/projects/sgs/1.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="/assets/projects/sgs/3.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src="/assets/projects/sgs/2.png"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />


                </div>

            </div>
            </div>
            
        </div>
    </div>
}