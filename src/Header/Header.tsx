import React, { useEffect, useState } from 'react';
import './Header.scss'

export const Header = () => {

    let [paddingVertical, setVerticalPadding] = useState(14)
    let [headerShadow, setHeaderShadow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])


    const handleScroll = (event: any) => {
        let padding = window.scrollY > 40 ? 0 : 14
        console.log(padding)
        setVerticalPadding(padding) 
        setHeaderShadow(window.scrollY > 40)
    }

    return <div className='header-container animated' style={{boxShadow: headerShadow ? '0px 0px 10px #aeaeae' : 'none'}}>
        <div className="px-5">
            <header className="container animated px-5 " style={{ paddingBottom: paddingVertical, paddingTop: paddingVertical }} >
                <nav className="navbar  navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><strong> Mim. </strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="px-2 menu-item nav-item active">
                                <a className="nav-link" href="#">HOME </a>
                            </li>
                            <li className="px-2  menu-item nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="px-2  menu-item nav-item">
                                <a className="nav-link" href="#">PORTFOLIO</a>
                            </li>
                            <li className="px-2  menu-item nav-item">
                                <a className="nav-link " href="#">SERVICES</a>
                            </li>
                            <li className="px-2  menu-item nav-item">
                                <a className="nav-link  " href="#">BLOG</a>
                            </li>
                            <li className="px-2 menu-item nav-item">
                                <a className="nav-link  " href="#">CONTACT</a>
                            </li>
                            <li className="px-2  nav-item">
                                <a className="nav-link menu-icon " href="#"  >
                                    <i className="bi-list" style={{ fontSize: 24 }}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    </div>
}


