


import React, { useState } from "react";
import "./addrelated.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function AddRelatedPro() {
  const initialContact = {
    title: "",
    mail: "",
    address: "",
    description: "",
    // image: null, // Added image as part of the initial state
  };

  const [product, setProduct] = useState(initialContact);
  const navigate = useNavigate();


  const inputHandler = (e) =>{
    const {name, value} = e.target;
    setProduct({...product, [name]:value});      
}

  

  // const submitForm = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   Object.entries(product).forEach(([key, value]) => {
  //     formData.append(key, value);
  //   });

  //   try {
  //     const response = await axios.post("http://localhost:5000/api/create", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     toast.success(response.data.msg || "Contact added successfully!", {
  //       position: "top-right",
  //     });
  //     navigate("/relatedproducts");
  //   } catch (error) {
  //     toast.error(error.response?.data?.msg || "Failed to add contact!", {
  //       position: "top-right",
  //     });
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/create", product)
    .then((response) =>{
      toast.success(response.data.msg, {position:"top-right"})
      navigate("/relatedproducts")
    })
    .catch(error => console.log(error))
}


  return (
    <div className="addProduct">
      <div className="header">
        <Link to="/relatedproducts">
          <i
            className="fa fa-long-arrow-left"
            aria-hidden="true"
            style={{ color: "black" }}
          ></i>
        </Link>
        <h3>Add New Contact</h3>
      </div>
      <br />
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="title">User Name</label>
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
          <label htmlFor="mail">Enter Your Mail</label>
          <input
            type="text"
            onChange={inputHandler}
            id="mail"
            name="mail"
            autoComplete="off"
            placeholder="Enter Your Mail"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={inputHandler}
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter Address"
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
        {/* <div className="inputGroup">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            onChange={inputHandler}
            id="image"
            name="image"
            accept="image/*"
          />
        </div> */}
        <div className="buttonGroup">
          <button type="submit" className="btn-primary">
            Add
          </button>
          <Link to="/relatedproducts">
            <button type="button" className="btn-secondary">
              Close
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddRelatedPro;



