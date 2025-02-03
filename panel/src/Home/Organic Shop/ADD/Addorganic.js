import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Addorganic() {
  const products = {
    productname: "",
    image: "",
    label: "",
    price: "",
    description: "",
  };

  const [product, setProduct] = useState(products);
  const navigate = useNavigate();

  const inputHandler = (e) => {
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
      const response = await axios.post("http://localhost:5000/api/organichomecreate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/organicpro");
    } catch (error) {
      toast.error("Failed to add product!", { position: "top-right" });
      console.error(error);
    }
  };
 
  return (
    <div className="addProduct">
      <div className="header">
        <Link to={"/organicpro"}>
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            style={{ color: "black" }}
          ></i>
        </Link>
        <h3>Add Vegetable</h3>
      </div>
      <br />
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="productname"
            name="productname"
            autoComplete="off"
            placeholder="Enter Product Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={inputHandler}
            id="image"
            name="image"
            autoComplete="off"
            placeholder="Choose Image"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            onChange={inputHandler}
            id="label"
            name="label"
            autoComplete="off"
            placeholder="Enter Label"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            onChange={inputHandler}
            id="price"
            name="price"
            autoComplete="off"
            placeholder="Enter Price"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            onChange={inputHandler}
            id="description"
            name="description"
            autoComplete="off"
            placeholder="Enter Description"
          />
        </div>

        <div className="buttonGroup">
          <button type="submit" className="btn-primary">
            Add
          </button>
          <Link to={"/organicpro"}>
            <button type="button" className="btn-secondary">
              Close
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Addorganic;