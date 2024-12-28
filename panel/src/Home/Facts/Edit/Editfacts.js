import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Editfacts = () => {
  const users = {
    icon: "",
    title: "",
    description: "",
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
      .get(`http://localhost:5000/api/getonefacts/${id}`)
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
      .put(`http://localhost:5000/api/updatefacts/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/facts");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="editProduct">
      <Link to="/facts">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "450px" }}
        ></i>
      </Link>
      <h3 style={{ color: "black", marginRight: "20px", marginRight: "50px" }}>Update Facts</h3>
      <form className="addProductForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="icon">Icon</label>
          <input
            type="file"
            onChange={(e) =>
              setProducts({ ...products, icon: e.target.files[0] })
            }
            id="icon"
            name="icon"
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Editfacts;
