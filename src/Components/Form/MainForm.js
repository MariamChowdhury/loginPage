import React from "react";
import { useState } from "react";
import "./Form.css";
const MainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginForm = (e) => {
    if (formData.name && formData.email && formData.password) {
      alert("Submitted!");
      setFormData(null);
    } else {
      alert("Submission failed!");
      setFormData(null);
    }
    e.preventDefault();
  };
  const handleBlur = (e) => {
    let validUserInfo = true;
    // name validation
    if (e.target.name === "name") {
      validUserInfo = /^[a-zA-Z ]*$/.test(e.target.value);
    }
    //email validation
    if (e.target.name === "email") {
      validUserInfo = /^[\w.+\-]+@gmail\.com$/.test(e.target.value);
    }
    //password validation
    if (e.target.name === "password") {
      validUserInfo = e.target.value.length > 8;
    }
    if (validUserInfo) {
      const newFormData = { ...formData };
      newFormData[e.target.name] = e.target.value;
      setFormData(newFormData);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleLoginForm}>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputName1"
            placeholder="Enter Name"
            required
            onBlur={handleBlur}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="focus001@gmail.com"
            required
            onBlur={handleBlur}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="8+ characters"
            required
            onBlur={handleBlur}
          />
        </div>
        <button type="submit" class="btn customButton loginButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default MainForm;
