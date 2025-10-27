import React, { useState } from "react";
import "../../styles/Forms.css";
import axios from "axios";

function PostData() {
  const defaultValues = {
    name: "",
    email: "",
    isActive: true,
  };
  const [formData, setFormData] = useState(defaultValues);

  const dataSend = async () => {
    try {
      const res = await axios.post(
        "https://express-mongo-connection-sigma.vercel.app/api/users",formData
      );
      console.log(res.formData);
    } catch (error) {
      console.log(error);
    }
  };
  dataSend();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("User create success ");

    setFormData(defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /> <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default PostData;
