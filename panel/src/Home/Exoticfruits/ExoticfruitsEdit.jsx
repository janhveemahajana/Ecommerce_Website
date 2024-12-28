import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ExoticfruitsEdit() {
  const location = useLocation();
  const navigate = useNavigate();

  // State to manage the form data
  const [formData, setFormData] = useState(location.state || {});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    const data = new FormData();
    data.append("heading1", formData.heading1);
    data.append("heading2", formData.heading2);
    data.append("heading3", formData.heading3);
    if (formData.image instanceof File) {
      data.append("image", formData.image); // Append file only if it's a new one
    } else {
      data.append("image", formData.image); // Append existing image path if unchanged
    }

    axios
      .put(`http://localhost:5000/api/updateExoticfruit/${formData._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/exoticfruits"); // Redirect back to the View page
      })
      .catch((error) => {
        console.error("Error updating hero data:", error);
      });
  };

  return (
    <div className="contactedit-container">
      <div className="contactedit-card">
        <h3>Edit Banner</h3>

        {/* CKEditor for Heading One */}
        <div className="form-group">
          <label>Heading1:</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.heading1 || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange("heading1", data);
            }}
          />
        </div>
        <div className="form-group">
          <label>Heading2:</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.heading2 || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange("heading2", data);
            }}
          />
        </div>
        <div className="form-group">
          <label>Heading3:</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.heading3 || ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleChange("heading3", data);
            }}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            id="image"
            name="image"
          />
        </div>

        <button onClick={handleUpdate} className="btn btn-success">
          Update
        </button>
        <button
          onClick={() => navigate("/exoticfruits")}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ExoticfruitsEdit;
