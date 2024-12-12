import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./shop.css";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/shopgetAll"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const deleteproduct = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/shopdelete/${productId}`)
      .then((response) => {
        console.log(response);
        setProducts((prevUser) =>
          prevUser.filter((product) => product._id !== productId)
        );
        toast.success(response.data.msg, { position: "top-right" });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function truncateText(text, maxLength) {
    if (typeof text !== "string") {
        console.error("Invalid input to truncateText: ", text);
        return "";
    }
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

  // const truncateText = (text, maxLength) => {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + "...";
  //   }
  //   return text;
  // };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="home-head">Shop</h2>
          <div className="add-button-container">
            <Link to={"/addproduct"} className="btn btn-primary add-button">
              Add
            </Link>
          </div>
          <table className="tab">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Heading</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>
                      <img
                        src={`http://localhost:5000${product.image}`}
                        alt={product.title}
                        className="product-image"
                        onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>

                    <td>
                      <span className="truncated-description">
                        {truncateText(product.description, 20)}
                      </span>
                    </td>
                    <td className="actionButtons">
                      <Link to={`/viewproduct/` + product._id}>
                        <i
                          className="fa-regular fa-eye"
                          style={{ color: "blue" }}
                        />
                      </Link>

                      <Link to={`/updateproduct/` + product._id}>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Link>

                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => deleteproduct(product._id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
