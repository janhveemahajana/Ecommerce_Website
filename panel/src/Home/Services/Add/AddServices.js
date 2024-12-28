import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./addservices.css";

const AddServices = () => {
  const users = {
    icon: "",
    title: "",
    description: "",
  };

  const [product, setProduct] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "icon") {
      // Handle file input
      setProduct({ ...product, icon: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createservice",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/services");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to add slide.");
    }
  };

  return (
    <div className="addServices">
      <Link to="/services">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Add Services</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="icon">Icon</label>
          <input
            type="file"
            onChange={inputChangeHandler}
            id="icon"
            name="icon"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={product.title}
            onChange={inputChangeHandler}
            id="title"
            name="title"
            autoComplete="off"
            placeholder="Title"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={product.description}
            onChange={inputChangeHandler}
            id="description"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
