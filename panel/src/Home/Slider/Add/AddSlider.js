import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./addslider.css";

const AddSlider = () => {
  const users = {
    label: "",
    image: "",
  };

  const [product, setProduct] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // Handle file input
      setProduct({ ...product, image: files[0] });
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
        "http://localhost:5000/api/createslider",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/slider");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to add slide.");
    }
  };

  return (
    <div className="addSlides">
      <Link to="/slider">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Add Slides</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            value={product.label}
            onChange={inputChangeHandler}
            id="label"
            name="label"
            autoComplete="off"
            placeholder="Label"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={inputChangeHandler}
            id="image"
            name="image"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">ADD SLIDE</button>
        </div>
      </form>
    </div>
  );
};

export default AddSlider;
