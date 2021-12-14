import React from "react";
import Footer from "./Footer";
import "./Form.css";
import MainForm from "./MainForm";
const Form = () => {
  return (
    <div className="container formContainer ">
      <div className="row py-4">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="topContainer">
            <p className="text-secondary">Already have an account?</p>
            <button className="btn btn-outline-secondary text-uppercase signInButton">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h3 className="fw-bold">Welcome to Focus!</h3>
        <p className="text-secondary">Register Your Account</p>
      </div>
      <div className="row pb-4">
        <MainForm />
      </div>
      <div className="row pb-4">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
