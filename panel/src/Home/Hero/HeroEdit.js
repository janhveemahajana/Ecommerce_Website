import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function HeroEdit() {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage the form data
  const [formData, setFormData] = useState(location.state || {});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/updatehero/${formData._id}`, formData)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/hero"); // Redirect back to the View page
      })
      .catch((error) => {
        console.error("Error updating hero data:", error);
      });
  };

  return (
    <div className="contactedit-container">
      <div className="contactedit-card">
        <h3>Edit Hero Information</h3>

        {/* CKEditor for Heading One */}
        <div className="form-group">
          <label>Heading One:</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.headingone || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange("headingone", data);
            }}
          />
        </div>

        {/* CKEditor for Heading Two */}
        <div className="form-group">
          <label>Heading Two:</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.headingtwo || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange("headingtwo", data);
            }}
          />
        </div>

        <button onClick={handleUpdate} className="btn btn-success">
          Update
        </button>
        <button onClick={() => navigate("/hero")} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default HeroEdit;
