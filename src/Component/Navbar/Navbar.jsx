import style from "./Navbar.module.css";
import Logo from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import search from "../../images/search.svg";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const fetchApiData = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=b7f77b88848378309fc867cd549a0964`
        )
        .then((res) => {
          setApiData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApiData();
  }, []);

  const onChnagehandeler = (e) => {
    setValue(e.target.value);

    let matches = apiData.filter((movie) => {
      const regex = RegExp(`${e.target.value}`);
      return movie.original_title.match(regex);
    });
    setSuggestion(matches);
  };

  const removeUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const onSearchHandeler = () => {
    console.log(value);
  };

  const detailsHandeler = (i) => {
    navigate(`/${i}`);
    setValue("");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.imgcontainer}>
          <img src={Logo} alt="websitelogo" />
        </div>
        {/* {token ? <div className={style.logout}>

<button onClick={removeUser}>Logout</button>
</div> : ""} */}

        {token ? (
          <div className={style.searchcontainer}>
            <div className={style.searchBox}>
              <input
                type="text"
                placeholder="Search movies"
                value={value}
                onChange={onChnagehandeler}
              />
              <button onClick={onSearchHandeler}>
                <img src={search} alt="searchIcon" />
              </button>
            </div>

            <div className={style.searchlist} style={{ zIndex: 1 }}>
              {value.length > 0 &&
                suggestion &&
                suggestion.map((ele, i) => {
                  return (
                    <div onClick={() => detailsHandeler(ele.id)}>
                      {ele.title}
                    </div>
                  );
                })}
            </div>

            <button onClick={removeUser}>Logout</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
