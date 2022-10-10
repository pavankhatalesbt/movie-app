import React, { useEffect, useState } from "react";
import style from "./Movie.module.css";
import backbtn from "../../images/backbtn.svg";
import play from "../../images/play.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Videoplay from "../Videoplay/Videoplay";

const Moviei = () => {
  const navigate = useNavigate();
  let img_path = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();

  const [movieinfo, setMoviemovieinfo] = useState([]);
  const [video, setVideo] = useState(false);

  const backtobapage = () => {
    navigate("/home");
  };
  // fetch movie info data

  const fetchMovieDetail = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b7f77b88848378309fc867cd549a0964&language=en-US`
      )
      .then((res) => {
        setMoviemovieinfo(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchMovieDetail();
  }, [movieinfo]);

  // console.log(movieinfo.backdrop_path)

  return (
    <>
      {movieinfo && (
        <div className={style.infocontainer}>
          <div className={style.sec1}>
            <img
              src={backbtn}
              alt="backbtn"
              className={style.backbtn}
              onClick={backtobapage}
            />
            <h1 style={{ color: "#ffffff" }}>{movieinfo.title}</h1>
            <h4>Rating :{movieinfo.vote_average}</h4>
            <p>{movieinfo.overview}</p>

            <div className={style.realeasedate}>
              <h4>Realease Date</h4>
              <h4>{movieinfo.release_date}</h4>
            </div>
            <div className={style.language}>
              <h4>Orginal Language</h4>
              <h4>{movieinfo.original_language}</h4>
            </div>
          </div>

          <div
            className={style.sec2}
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movieinfo.poster_path}`})`,
            }}
          >
            <img
              src={play}
              alt=""
              className={style.play}
              onClick={() => setVideo(true)}
            />
          </div>
          <div className={style.modal}>
            {video ? <Videoplay id={id} onClick={() => setVideo(false)} /> : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default Moviei;
