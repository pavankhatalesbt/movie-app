import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Alert;
