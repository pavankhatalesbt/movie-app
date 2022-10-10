import React, {useState } from "react";
import style from "./Loginform.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const Loginform = () => {
  
  
  const navigate = useNavigate('')

  // form input data
  const [forminput, setForminput] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [userNameError, setuserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //   get token
  const fetchToken = async () => {
    const token = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=b7f77b88848378309fc867cd549a0964"
    );
    localStorage.setItem("token", token.data.request_token);
    // console.log(token)
  };

  const onChangeHandeler = (e) => {
    setForminput({ ...forminput, [e.target.name]: e.target.value });
  };

  //   sumbmit form-data and sent token
  const LoginHandeler = async () => {
    setLoading(true);
    setTimeout(async () => {
      const { username, password } = forminput;

      if (username.trim() === "" && password.trim() === "") {
        toast.error("please enter username and password");
        setLoading(false);
      } else if (username.trim() === "") {
        toast.error("Enter your username");
        setLoading(false);
      } else if (password.trim() === "") {
        toast.error("Enter your password");
        setLoading(false);
      } else if (username.trim() === "" || username !== forminput.username) {
        setuserNameError(true);
        toast.error("User name is not valid");
        setLoading(false);
      } else if (password.trim() === "" || password !== forminput.password) {
        setPasswordError(true);
        toast.error("Password is not valid");
        setLoading(false);
      } else {
        await fetchToken();

        // post data
        const VarifyToken = localStorage.getItem("token");

        const data = {
          username: forminput.username,
          password: forminput.password,
          request_token: VarifyToken,
        };
        const response = await axios.post(
          "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b7f77b88848378309fc867cd549a0964",
          data
        );
console.log(response);
        setLoading(false);
        setForminput({
          username: "",
          password: "",
        });

        toast.success("Login Success");
        navigate('/home')
      }
    }, 1000);
  };
  return (
    <>
    <div className={style.xx}>
    <div className={style.formcontainer}>
     
     <h1>Sign in</h1>
     <p>Sign in to your Self Service Portal</p>
     <div className={style.formcontrol}>
     <input
       type="text"
       className={style.input}
       placeholder="Username"
       name="username"
       value={forminput.username}
       onChange={onChangeHandeler}
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
       value={forminput.password}
       onChange={onChangeHandeler}
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
       onClick={LoginHandeler}>
       {loading ? <Spin /> : "Log in"}
     </button>
   </div>
   <ToastContainer />
 </div>
    </div>
    

    
    
    </>
  );
};

export default Loginform;
