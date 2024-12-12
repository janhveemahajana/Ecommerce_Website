import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cartadd.css";
import axios from "axios";
import toast from "react-hot-toast";

const Addcart = () => {
  const users = {
    productname: "",
    image: "",
    price: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setUser({ ...user, image: files[0] }); // Handle file input separately
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // FormData to handle the image upload
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cartcreate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/cart");
    } catch (error) {
      toast.error("Failed to add product!", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <div className="addProduct">
      <Link to={"/cart"}>Back</Link>
      <h3>Add New Product</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="productname"
            name="productname"
            autoComplete="off"
            placeholder="Product Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            className="form-control"
            onChange={inputHandler}
            id="image"
            name="image"
            autoComplete="off"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            onChange={inputHandler}
            id="price"
            name="price"
            autoComplete="off"
            placeholder="Enter price"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Addcart;
