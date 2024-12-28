import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Ourdeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/getalldeal");
      setProducts(response.data);
    };
    fetchData();
  }, []);

  const deleteproduct = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/deletedeal/${productId}`)
      .then((response) => {
        console.log(response);
        setProducts((prevUser) =>
          prevUser.filter((products) => products._id !== productId)
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
          <h2 className="home-head">Our Deals</h2>
          <div className="add-button-container">
            <Link to={"/adddeals"} className="btn btn-primary add-button">
              Add
            </Link>
          </div>
          <table className="tab">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Heading</th>
                <th>Image</th>
                <th>Heading1</th>
                <th>Heading2</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.heading}</td>
                    <td>
                      <img
                        src={`http://localhost:5000/${product.image}`}
                        alt={product.heading}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td>{product.heading1}</td>
                    <td>{product.heading2}</td>

                    <td className="actionButtons">
                      <Link to={`/updatedeals/` + product._id}>
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
