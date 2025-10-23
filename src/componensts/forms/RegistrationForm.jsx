import React from "react";
import "../../styles/RegistrationForm.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const formik = useFormik({
  initialValues: {
    fullname: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    bio: "",
  },

  validationSchema: Yup.object({
    fullname: Yup.string()
      .required("Name is required")
      .min(2, "Name must have at least 2 characters"),

    age: Yup.number()
      .required("Age is required")
      .typeError("You must be at least 18 years old")
      .min(18, "Minimum age is 18")
      .max(100, "Maximum age is 100"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must be at least one uppercase letter")
      .matches(/[a-z]/, "Must be at least one lowercase letter")
      .matches(/\d/, "Must be at least one number")
      .matches(/[@$!%*?&]/, "Must be at least one special character")
      .min(6, "Password must be at least 6 charaters long, include uppercase, lowercase,number,and special character"),

    gender: Yup.string()
      .required("Gender is required"),

    country: Yup.string()
       .required("Country is required"),
    
    skills: Yup.array()
       .min(1, "Select at least one skill"),

    bio: Yup.string()
       .max(300, "Max 300 characters allowed"),   
  }),
});

function RegistrationForm() {
  return (
    <>
      <div className="form-Container">
        <h2 className="head">Registration Form</h2>
        <form action="">
          <label htmlFor="name">Full Name</label> <br />
          <input
            type="text"
            className="input-box"
            placeholder="Enter your name"
          />{" "}
          <br />
          <div></div>
          <label htmlFor="age">Age</label> <br />
          <input
            type="number"
            className="input-box"
            placeholder="Enter your age"
          />{" "}
          <br />
          <div></div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
          />{" "}
          <br />
          <div></div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="text"
            className="input-box"
            placeholder="Enter your password"
          />{" "}
          <br />
          <div></div>
          <label htmlFor="gender">Gender</label> <br />
          <input type="radio" name="gender" /> Male
          <input type="radio" name="gender" /> Female <br />
          <label htmlFor="">Country</label> <br />
          <select name="country" className="country">
            <option value="">Select</option>
            <option value="">Srilanka</option>
            <option value="">india</option>
            <option value="">USA</option>
            <option value="">UK</option>
            <option value="">canada</option>
            <option value="">Australis</option>
          </select>{" "}
          <br />
          <label htmlFor="skills">Skills</label> <br />
          <input type="checkbox" name="" />
          HTML
          <input type="checkbox" name="" />
          CSS
          <input type="checkbox" name="" />
          Javascript
          <input type="checkbox" name="" />
          React
          <input type="checkbox" name="" />
          Node.js <br />
          <label htmlFor="Bio">Bio</label> <br />
          <textarea
            name="textarea"
            className="input-box"
            id="text-area"
            placeholder="Tell somthing about yourself..."
          />{" "}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
