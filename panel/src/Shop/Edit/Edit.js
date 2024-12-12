import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const users = {
    heading: "",
    title: "",
    label: "",
    image: "",
    description: "",
    newprice: "",
    oldprice: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(users);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
    console.log(products);
  };

  useEffect(() => {
    console.log("Product ID:", id);
    axios
      .get(`http://localhost:5000/api/shopgetone/${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(products).forEach((key) => {
      formData.append(key, products[key]);
    });

    await axios
      .put(`http://localhost:5000/api/shopupdate/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/shop");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addProduct">
      <Link to={"/shop"}>Back</Link>
      <h3>Update Product</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            value={products.heading}
            onChange={inputChangeHandler}
            id="heading"
            name="heading"
            autoComplete="off"
            placeholder="Heading"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={products.title}
            onChange={inputChangeHandler}
            id="title"
            name="title"
            autoComplete="off"
            placeholder="Title"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            value={products.label}
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
            onChange={(e) =>
              setProducts({ ...products, image: e.target.files[0] })
            }
            id="image"
            name="image"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={products.description}
            onChange={inputChangeHandler}
            id="description"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="newprice">NewPrice</label>
          <input
            type="number"
            value={products.newprice}
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
            value={products.oldprice}
            onChange={inputChangeHandler}
            id="oldprice"
            name="oldprice"
            autoComplete="off"
            placeholder="Oldprice"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;