import React from 'react';
import './Main.scss'

export const Main = () => {
    return <div className="p-4">
        <div className="banner-container row">
            <div className="col-md-6 p-4">
                <div className="whois mb-2">Hello, my name is</div>
                <h1 className="fullname mb-3">Andrew jordan</h1>
                <div className="text mb-4">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demord by</div>
                <button type="button" className="btn btn-dark mb-5  btn-lg">
                    <div className="px-3">My work </div>
                </button>
            </div>
            <div className="col-md-6 p-4 text-center">
                <img style={{ width: '70%' }} src="assets/layer1.png" />
            </div>
        </div>
    </div>
}