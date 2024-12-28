import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize state with empty fields
  const [testimonial, settestimonial] = useState({
    title: "",
    description: "",
    clientName: "",
    profession: "",
    image: "",
  });

  // Handle input change for all fields
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    settestimonial({ ...testimonial, [name]: value });
  };

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      settestimonial({ ...testimonial, image: file });
    }
  };

  // Fetch testimonial data when component is mounted
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getsingletestimonal/${id}`)
      .then((response) => {
        settestimonial(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in testimonial) {
      formData.append(key, testimonial[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/updatetestimonal/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/testimonial");
    } catch (error) {
      toast.error("Failed to update testimonial!", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Link to={"/testimonial"}>
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          style={{ color: "black", marginRight: "10px" }}
        ></i>
      </Link>
      <h2>Edit</h2>

      <form onSubmit={submitForm}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={testimonial.title}
            onChange={inputChangeHandler}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={testimonial.description}
            onChange={inputChangeHandler}
            rows="3"
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </label>
        <br />

        <label>
          Client Name:
          <input
            type="text"
            name="clientName"
            value={testimonial.clientName}
            onChange={inputChangeHandler}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </label>
        <br />

        <label>
          Profession:
          <input
            type="text"
            name="profession"
            value={testimonial.profession}
            onChange={inputChangeHandler}
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
        </label>
        <br />

        <label>
          Client Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "block", marginBottom: "10px" }}
          />
        </label>
        <br />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPage;
