import React, { useEffect, useState } from 'react'
import style from './Videoplay.module.css'
import axios from 'axios'
import closebtn from '../../images/closebtn.svg'

const Videoplay = ({ id , onClick}) => {

    const [movieData, setMovieData] = useState([])

    const movieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b7f77b88848378309fc867cd549a0964`).then((res) => {
            setMovieData(res.data.results.filter((type) => {
                return (
                    type.type === "Trailer"
                )
            }))
        })
    }


    useEffect(() => {
        movieDetails()
    }, [movieData])

    return (
        <>
            {movieData.length > 0 ?
                <>
                    <div className="modalContainer">

                      
                            <button onClick={onClick} className={style.closebutton} ><img src={closebtn} alt=""/></button>
                       

                        < iframe className={style.modal}
                            src={`https://www.youtube-nocookie.com/embed/${movieData[0].key}?autoplay=1&mute=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
                : ""}
        </>
    )
}

export default Videoplay