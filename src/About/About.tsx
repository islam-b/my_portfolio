import React from 'react';
import './About.scss'

export const About = () => {
    return <div className="about-container p-5 d-flex flex-column align-items-center justify-content-start">
        <h2 className="my-3" style={{ fontWeight: 'bold' }}>ABOUT ME</h2>
        <div className="horizontal-line">
            <div className="top"></div>
            <div className="bottom"></div>
        </div>
        <ul className="my-4 list-inline text-center about-work">
            <li className="list-inline-item mr-0 text-muted">Software Engineer</li>
            <li className="list-inline-item mr-0 text-muted"><span>&#8226;</span></li>
            <li className="list-inline-item mr-0 text-muted">Web/Mobile developer</li>
            <li className="list-inline-item mr-0 text-muted"><span>&#8226;</span></li>
            <li className="list-inline-item mr-0 text-muted">UX/UI Designer</li>
        </ul>

        <div className="my-name my-3">
            A. Jordan
        </div>

        <p className="my-3" style={{ maxWidth: '700px', textAlign: 'center' }}>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire, tht they cannot foresee the pain and trouble that are
        </p>

        <button type="button" className="btn btn-dark my-2 ">
            <div className="px-2">Download CV</div>
        </button>

        <div className="my-4 row w-100">
            <div className="col-md-6 p-4 d-flex flex-column align-items-center">
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="HTML / CSS /JS" percentage={90} />
                </div>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="Typescript" percentage={85} />
                </div>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="Angular / ReactJS" percentage={80} />
                </div>
            </div>
            <div className="col-md-6 p-4 d-flex flex-column align-items-center">
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="React Native (Mobile)" percentage={80} />
                </div>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="Android (Kotlin / Java)" percentage={75} />
                </div>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Skill label="C# / .NET" percentage={65} />
                </div>
            </div>
        </div>
    </div>
}


//TODO extract shared

const Skill = (props: any) => {
    let percentage = props.percentage ?? 0
    return <div className="skill mb-5">
        <div className="skill-content mb-2">
            <h6>{props.label}</h6>
            <label>{percentage}%</label>
        </div>
        <div className="skill-bar">
            <div className="skill-holder">
                <div style={{ width: `${percentage}%` }} className="skill-outer">

                </div>
                <div className="skill-dot">
                </div>
            </div>

        </div>
    </div>
}