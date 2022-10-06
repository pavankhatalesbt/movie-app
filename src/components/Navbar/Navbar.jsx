import React from 'react'
import style from './Navbar.module.css'
import weblogo from '../../images/weblogo.svg'

const Navbar = () => {
    return (
        <>
            <header>
                <div className={style.container}>
                    <div className={style.weblogo}>
                        <img src={weblogo} alt="websiteogo" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar