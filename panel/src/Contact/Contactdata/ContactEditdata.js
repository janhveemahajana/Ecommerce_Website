import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./contacteditdata.css";
import toast from "react-hot-toast";

function ContactEditdata() {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage the form data
  const [formData, setFormData] = useState(location.state || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    axios
      .put(
        `http://localhost:5000/api/updatenewcontact/${formData._id}`,
        formData
      )
      .then((response) => {
        // alert("Contact updated successfully!");
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/relatedproducts");
        navigate("/contactdata"); // Redirect back to the View page
      })
      .catch((error) => {
        console.error("Error updating contact data:", error);
      });
  };

  return (
    <div className="contactedit-container">
      <div className="contactedit-card">
        <h3>Edit Contact Information</h3>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Mail:</label>
          <input
            type="email"
            name="mail"
            value={formData.mail || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Telephone:</label>
          <input
            type="number"
            name="telephone"
            value={formData.telephone || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button onClick={handleUpdate} className="btn btn-success">
          Update
        </button>
        <button
          onClick={() => navigate("/contactdata")}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ContactEditdata;
