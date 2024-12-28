import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditSlider = () => {
  const users = {
    label: "",
    image: "",
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
      .get(`http://localhost:5000/api/slidergetone/${id}`)
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
      .put(`http://localhost:5000/api/sliderupdate/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/slider");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addProduct">
      <Link to="/slider">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Update Slides</h3>
      <form className="addProductForm" onSubmit={submitForm}>
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
          <button type="submit">Update Slide</button>
        </div>
      </form>
    </div>
  );
};

export default EditSlider;
