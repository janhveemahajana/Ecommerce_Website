import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getservices"
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
      .delete(`http://localhost:5000/api/deleteservice/${productId}`)
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


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="home-head">Services</h2>
          <div className="add-button-container">
            <Link to={"/addservices"} className="btn btn-primary add-button">
              Add
            </Link>
          </div>
          <table className="tab">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Icon</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:5000${product.icon}`}
                        alt={product.title}
                        className="icon"
                        onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>

                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td className="actionButtons">

                      <Link to={`/updateservices/` + product._id}>
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
