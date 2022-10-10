import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./Home.module.css";
import Pagenation from "../../Component/Pegination /Pagenation";

import Banner from "../../Component/Mainpage/Banner/Banner";
import Card from "../../Component/Mainpage/Card/Card";
let base_url = "https://api.themoviedb.org/3/trending/movie/day";

let API_key = "?api_key=b7f77b88848378309fc867cd549a0964";
let url = base_url + API_key;

export const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1)

  const Apiresponse = () => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=b7f77b88848378309fc867cd549a0964&page=${page}`)
    .then((data) => {
      setMovieData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
  
    Apiresponse()
 
}, [page])

const nextPage = () => {
  setPage(page + 1)
}

const prevPage= () => {
  setPage(page - 1)
}

const pageNumber = (i) => {
  setPage(i)
}
  return (
    <>
      <Banner />
      <div className={style.maincontainer}>
      <h1>Trending</h1>
      <div className={style.Moviecontainer}>
        {movieData.length === 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, ind) => {
            return <Card info={res} ind={ind} key={ind} />;
          })
        )}
      </div>
      <Pagenation pageNumber={page} goToCurrentPage={pageNumber} nextPage={nextPage}
                prevPage={prevPage} page={page}/>
      </div>
    
    
    </>
  );
};
