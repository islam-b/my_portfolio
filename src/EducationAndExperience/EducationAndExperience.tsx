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
                    <Item />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                <Item />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                <Item />

                </div>
            </div>
            <div className="col-md-6 px-4 d-flex flex-column align-items-center">
                <div style={{ width: '100%', maxWidth: '450px' }}>
                <Item />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                <Item />

                </div>
                <div style={{ width: '100%', maxWidth: '450px' }}>
                <Item />

                </div>
            </div>
        </div>

    </div>
}

const Item = () => {
    return <div className="item d-flex flex-row">
        <div className="line">
            <div className="dot"></div>
        </div>
        <div className="container px-4 py-3">
            <div className="content p-4">
                <h6>2015 - 2020</h6>
                <h5>Studied at ESI</h5>
                <p>
                    <h5>2015 - 2020</h5>
                </p>
            </div>
        </div>

    </div>
}