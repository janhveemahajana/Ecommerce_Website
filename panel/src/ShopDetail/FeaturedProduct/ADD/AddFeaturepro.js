import React, { useState } from "react";
// import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddFeaturepro = () => {
  const users = {
    productname: "",
    title: "",
    image: "",
    newprice: "",
    oldprice: "",
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
        "http://localhost:5000/api/featurecreate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/featurepro");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="addProduct">
      <Link to="/featurepro">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Add Product</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            value={product.productname}
            onChange={inputChangeHandler}
            id="productname"
            name="productname"
            autoComplete="off"
            placeholder="Product Name"
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
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={inputChangeHandler}
            id="image"
            name="image"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="newprice">NewPrice</label>
          <input
            type="number"
            value={product.newprice}
            onChange={inputChangeHandler}
            id="newprice"
            name="newprice"
            autoComplete="off"
            placeholder="Newprice"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="oldprice">OldPrice</label>
          <input
            type="number"
            value={product.oldprice}
            onChange={inputChangeHandler}
            id="oldprice"
            name="oldprice"
            autoComplete="off"
            placeholder="Oldprice"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddFeaturepro;
