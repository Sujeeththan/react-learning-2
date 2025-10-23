import React, { useState } from "react";
import "../../styles/RegistrationForm.css";

function RegistrationForm() {
  const initialValues = {
    fullName: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    bio: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("Checked:", checked);

    if (type === "checkbox") {
      setFormData((prev) => {
        const skills = prev.skills.includes(value)
          ? prev.skills.filter((skill) => skill !== value)
          : [...prev.skills, value];
        return { ...prev, skills };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully! Check console for JSON data");

    setFormData(initialValues);
  };

  return (
    <>
      <div className="form-Container">
        <h2 className="head">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label> <br />
          <input
            type="text"
            name="fullName"
            className="input-box"
            placeholder="Enter your name"
            value={formData.fullname}
            onChange={handleChange}
          />
          <br />
          <div></div>
          <label>Age</label> <br />
          <input
            type="number"
            name="age"
            className="input-box"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />
          <div></div>
          <label>Email</label> <br />
          <input
            type="email"
            name="email"
            className="input-box"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <div></div>
          <label>Password</label> <br />
          <input
            type="text"
            name="password"
            className="input-box"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <div></div>
          <label>Gender</label> <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female <br />
          <label>Country</label> <br />
          <select
            name="country"
            className="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          <br />
          <label>Skills</label> <br />
          <input
            type="checkbox"
            name="skills"
            value="HTML"
            checked={formData.skills.includes("HTML")}
            onChange={handleChange}
          />
          HTML
          <input
            type="checkbox"
            name="skills"
            value="CSS"
            checked={formData.skills.includes("CSS")}
            onChange={handleChange}
          />
          CSS
          <input
            type="checkbox"
            name="skills"
            value="Javascript"
            checked={formData.skills.includes("Javascript")}
            onChange={handleChange}
          />
          Javascript
          <input
            type="checkbox"
            name="skills"
            value="React"
            checked={formData.skills.includes("React")}
            onChange={handleChange}
          />
          React
          <input
            type="checkbox"
            name="skills"
            value="Node.js"
            checked={formData.skills.includes("Node.js")}
            onChange={handleChange}
          />
          Node.js <br />
          <label>Bio</label> <br />
          <textarea
            name="bio"
            className="input-box"
            id="text-area"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell somthing about yourself..."
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
