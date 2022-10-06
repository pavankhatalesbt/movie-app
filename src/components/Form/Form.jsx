import React, { useState } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Form = () => {
  const navigate = useNavigate("");

  const [Userdata, setUserdata] = useState({
    username: "",
    password: "",
  });

  const [userNameError, setuserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  // token fetch
  const gettoken = async () => {
    const token = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=b7f77b88848378309fc867cd549a0964"
    );
    localStorage.setItem("token", token.data.request_token);
  };

  const onchangehandler = (e) => {
    setUserdata({ ...Userdata, [e.target.name]: e.target.value });
  };

  const LoginHandeler = async () => {
    setLoading(true);

    setTimeout(async () => {
      const { username, password } = Userdata;

      if (username.trim() === "" || username !== "pavankhatalesbt") {
        setuserNameError(true);
        toast.error("enter valid useaname");
        setLoading(false);
      } else if (password.trim() === "" || password !== "pavan@123") {
        setPasswordError(true);
        toast.error("enter valid password");
        setLoading(false);
      } else {
        await gettoken();
        const checkToken = localStorage.getItem("token");

        const data = {
          username: Userdata.username,
          password: Userdata.password,
          request_token: checkToken,
        };
        const res = await axios.post(
          "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b7f77b88848378309fc867cd549a0964",
          data
        );

        console.log(res.data)

        setUserdata({
          username: "",
          password: "",
        });

        // toast.success("Login Success");
        navigate("/home");
      }
    }, 1000);
  };
  return (
    <>
      <section>
        <div className={style.formcontrol}>
          <h1>Sign in</h1>
          <p>Sign in to your Self Service Portal</p>

          <input
            type="text"
            className={style.input}
            placeholder="Username"
            name="username"
            value={Userdata.username}
            onChange={onchangehandler}
            style={{"margin":"30px 0"}}
          />
          {userNameError ? (
            <p className={style.errorMessage}>Invalid Username</p>
          ) : (
            ""
          )}
          <br />
          <input
            type="password"
            className={style.input}
            placeholder="Password"
            name="password"
            value={Userdata.password}
            onChange={onchangehandler}
            style={{"margin":"20px 0"}}

          />
          {passwordError ? (
            <p className={style.errorMessage}>Invalid Password</p>
          ) : (
            ""
          )}

          <br />
          <button
            disabled={loading === true}
            className={style.button}
            onClick={LoginHandeler}
          >
            {loading ? <Spin /> : "Log in"}
          </button>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Form;
