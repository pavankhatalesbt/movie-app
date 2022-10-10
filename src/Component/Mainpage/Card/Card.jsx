import React from "react";
import style from "./Card.module.css";
import play from "../../../images/play.svg";
import { useNavigate } from "react-router";
import Starrating from "../../Starrating/Starrating"

const Card = (movie) => {
  const navigate = useNavigate();
  let img_path = "https://image.tmdb.org/t/p/w500";
  const detailsHandeler = (ind) => {
    navigate(`/Moviei/${ind}`);
  };

  return (
    <>
      <div className={style.cardscontainer}>
        <div
          className={style.Cards}
          onClick={() => detailsHandeler(movie.info.id)}
        >
          <img
            src={img_path + movie.info.poster_path}
            alt="cardimg"
            className={style.poster}
          ></img>
          <div className={style.moviedetails}>
            <div className="box">
              <h4 className={style.title}>
                {" "}
                {movie.info.title.length <= 20
                  ? movie.info.title
                  : movie.info.title.slice(0, 20)}
              </h4>

              <div className={style.ratingg}>
                <Starrating
                  rating={movie.info.vote_average}
                />
                <p className="rating">{movie.info.vote_average}</p>
              </div>
            </div>
            <img src={play} alt="playbtn" className={style.playbtn} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

