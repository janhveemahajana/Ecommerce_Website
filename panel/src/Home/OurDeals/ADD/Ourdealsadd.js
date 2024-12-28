import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Ourdealsadd = () => {
  const users = {
    heading: "",
    image: "",
    heading1: "",
    heading2: "",
  };

  const [product, setProduct] = useState(users);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    console.log([...formData.entries()]); // Check the form data in the console

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createdeal",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/deals");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="addProduct">
      <Link to="/deals">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Add Product</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            value={product.heading}
            onChange={inputChangeHandler}
            id="heading"
            name="heading"
            autoComplete="off"
            placeholder="Heading"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={(e) =>
              setProduct({ ...product, image: e.target.files[0] })
            }
            id="image"
            name="image"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="heading1">Heading1</label>
          <input
            type="text"
            value={product.heading1}
            onChange={inputChangeHandler}
            id="heading1"
            name="heading1"
            autoComplete="off"
            placeholder="Heading1"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="heading2">Heading2</label>
          <input
            type="text"
            value={product.heading2}
            onChange={inputChangeHandler}
            id="heading2"
            name="heading2"
            autoComplete="off"
            placeholder="Heading2"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Ourdealsadd;
