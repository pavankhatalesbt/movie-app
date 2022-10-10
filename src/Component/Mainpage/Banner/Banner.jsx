import React from "react";
import banner from "../../../images/banner.svg";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div>
        <img src={banner} alt="" className={style.bannercontainer} />
      </div>
    </>
  );
};

export default Banner;
