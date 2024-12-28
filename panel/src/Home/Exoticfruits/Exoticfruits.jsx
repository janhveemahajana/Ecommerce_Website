import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Exoticfruits() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getexoticfruit")
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    navigate("/ExoticfruitsEdit/:id", { state: product });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No contact data found</p>;
  }

  return (
    <div className="contactdata-container">
      <div className="contactdata-card">
        <h3>
          Banner{" "}
          <i
            onClick={handleEdit}
            className="fa-regular fa-pen-to-square"
            style={{ color: "blue", fontSize: "24px" }}
          ></i>
        </h3>
        <p>
          <strong>Heading1:</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: product.heading1 }}></span>
        </p>
        <p>
          <strong>Heading2:</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: product.heading2 }}></span>
        </p>
        <p>
          <strong>Heading3:</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: product.heading3 }}></span>
        </p>
        <div className="inputGroup">
          <label htmlFor="image">Image - </label>
          <img
            type="image"
            src={`http://localhost:5000${product.image}`}
            alt={product.title}
            className="product-image "
            onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Exoticfruits;