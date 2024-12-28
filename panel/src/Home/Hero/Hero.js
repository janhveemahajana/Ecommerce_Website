import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Hero() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gethero")
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hero data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    navigate("/heroedit/:id", { state: product });
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
          Hero{" "}
          <i
            onClick={handleEdit}
            className="fa-regular fa-pen-to-square"
            style={{ color: "blue", fontSize: "24px" }}
          ></i>
        </h3>
        <p>
          <strong>Heading1:</strong>{" "}
          <span
            dangerouslySetInnerHTML={{ __html: product.headingone }}
          ></span>
        </p>
        <p>
          <strong>Heading2:</strong>{" "}
          <span
            dangerouslySetInnerHTML={{ __html: product.headingtwo }}
          ></span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
