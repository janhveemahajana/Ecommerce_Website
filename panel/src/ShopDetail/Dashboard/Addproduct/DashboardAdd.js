import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboardadd.css";
import axios from "axios";
import toast from "react-hot-toast";

function DashboardAdd() {
  const products = {
    heading: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
    weight:"",
    origin:"",
    quality:"",
    check: "",
    minweight: ""
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
      const response = await axios.post("http://localhost:5000/api/createdashp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/detail");
    } catch (error) {
      toast.error("Failed to add product!", { position: "top-right" });
      console.error(error);
    }
  };
  
  return (
    <div className="dashboardAdd">
      <div className="header">
        <Link to="/detail">
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            style={{ color: "black", marginRight: "10px" }}
          ></i>
        </Link>
        <h3>Add Shop Detail</h3>
      </div>
      <form className="dashboardaddForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            onChange={inputHandler}
            id="heading"
            name="heading"
            autoComplete="off"
            placeholder="Enter Heading"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="title">Product Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="title"
            name="title"
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
          <label htmlFor="category">Category</label>
          <input
            type="text"
            onChange={inputHandler}
            id="category"
            name="category"
            autoComplete="off"
            placeholder="Enter Category"
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
        <div className="inputGroup">
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            onChange={inputHandler}
            id="weight"
            name="weight"
            autoComplete="off"
            placeholder="Enter Weight"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="origin">Origin</label>
          <input
            type="text"
            onChange={inputHandler}
            id="origin"
            name="origin"
            autoComplete="off"
            placeholder="Enter Origin"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="quality">Quality</label>
          <input
            type="text"
            onChange={inputHandler}
            id="quality"
            name="quality"
            autoComplete="off"
            placeholder="Enter Quality"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="check">Check</label>
          <input
            type="text"
            onChange={inputHandler}
            id="check"
            name="check"
            autoComplete="off"
            placeholder="Enter Check"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="minweight">Min Weight</label>
          <input
            type="number"
            onChange={inputHandler}
            id="minweight"
            name="minweight"
            autoComplete="off"
            placeholder="Enter Min Weight"
          />
        </div>

        <div className="buttonGroup">
          <button type="submit" className="btn-primary">
            Add
          </button>
          <Link to={"/detail"}>
            <button type="button" className="btn-secondary">
              Close
            </button>
          </Link>
        </div>
      </form>
    </div>

  );
}

export default DashboardAdd;
