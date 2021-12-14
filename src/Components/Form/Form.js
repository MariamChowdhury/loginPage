import React from "react";
import Footer from "./Footer";
import "./Form.css";
import MainForm from "./MainForm";
const Form = () => {
  return (
    <div className="formContainer ">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 pt-3">
          <div className="topContainer py-3">
            <p className="text-secondary">Already have an account?</p>
            <button className="btn btn-outline-secondary text-uppercase signInButton">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="row mx-5">
        <h3 className="fw-bold ">Welcome to Focus!</h3>
        <p className="text-secondary pt-1">Register Your Account</p>
      </div>
      <div className="row  py-3 mx-5">
        <MainForm />
      </div>
      <div className="row py-3 mx-5">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
