import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addTestimonial.css"; // Make sure to style your component
import axios from "axios";
import toast from "react-hot-toast";

const AddTestimonial = () => {
  const users = {
    title: "",
    description: "",
    clientName: "",
    profession: "",
    image: "",
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
        "http://localhost:5000/api/createnewtestimonal", // Adjust your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/testimonial"); // Redirect to testimonial page after successful submission
    } catch (error) {
      toast.error("Failed to add testimonial!", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <div className="addTestimonial">
      <Link to={"/testimonial"}>
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h3>Add New Testimonial</h3>
      <form className="addTestimonialForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="title"
            name="title"
            autoComplete="off"
            placeholder="Title of the testimonial"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            onChange={inputHandler}
            id="description"
            name="description"
            autoComplete="off"
            placeholder="Description of the testimonial"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="clientName"
            name="clientName"
            autoComplete="off"
            placeholder="Client's Name"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            className="form-control"
            onChange={inputHandler}
            id="profession"
            name="profession"
            autoComplete="off"
            placeholder="Client's Profession"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Client Image</label>
          <input
            type="file"
            className="form-control"
            onChange={inputHandler}
            id="image"
            name="image"
            autoComplete="off"
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn-primary"
            style={{ padding: "15px", marginRight:"10px" }}
          >
            Add
          </button>
          <Link to={"/testimonial"}>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: "15px" }}
            >
              Close
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddTestimonial;
