import './EducationAndExperience.scss';

export const EducationAndExperience = () => {
    return <div className=" p-5 d-flex flex-column align-items-center justify-content-start">
        <h2 className="my-3" style={{ fontWeight: 'bold' }}>
            Education and Experience
        </h2>
        <div className="horizontal-line">
            <div className="top"></div>
            <div className="bottom"></div>
        </div>
        <div className="my-4"></div>
        <div className="mt-4 row w-100">
            <div className="col-md-6 px-4 d-flex flex-column align-items-center">
                <div style={{ width: '100%', maxWidth: '450px' }}>
                    <Item from={"2015"} to={"2020"}
                        title={"Student at Higher Institute of Computer Science"}
                        description={"Obtained my Master's degree in 2020"} />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                    <Item from={"Sep 2019"} to={"Jul 2020"}
                        title={"Intern at Sirius NET"}
                        description={"Worked on my final year project"} />

                </div>

            </div>
            <div className="col-md-6 px-4 d-flex flex-column align-items-center">
                <div style={{ width: '100%', maxWidth: '450px' }}>
                    <Item from={"Jan 2020"} to={"Jul 2020"}
                        title={"Front-End Freelancer at DataFirst Technologies"}
                        description={"Worked as partial-time front-end freelancer"} />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                    <Item from={"Oct 2020"} to={"Now"}
                        title={"Full-Stack developer at ITComp"}
                        description={"Currently working as full-time developer (Web/Mobile/Backend)"} />

                </div>
            </div>
        </div>

    </div>
}

const Item: React.FC<PropsType> = (props) => {
    return <div className="item d-flex flex-row">
        <div className="line">
            <div className="dot"></div>
        </div>
        <div className="container px-4 py-3">
            <div className="content p-4">
                 <label> {props.from} - {props.to}   </label>
                <h5 className='my-2'><strong>{props.title}</strong></h5>
                <small>
                    {props.description}
                </small>
            </div>
        </div>

    </div>
}

interface PropsType {
    from: string;
    to: string;
    title: string;
    description: string;
}