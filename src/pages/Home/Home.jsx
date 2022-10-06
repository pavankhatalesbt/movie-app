import React from 'react'
import style from './Home.module.css'
import { ToastContainer, toast } from "react-toastify";
toast.success("Login Success");

const Home = () => {
    return (
        <div className={style.home}>
        
                <h1>

                    User Login successfull
                </h1>
                <ToastContainer />

        </div>
    )
}

export default Home