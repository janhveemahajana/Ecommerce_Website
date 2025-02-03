import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contactlist = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllcontactform"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  fetchData();

  const deleteUser = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/deletecontactform/${productId}`
      );
      setProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Failed to delete review!");
      console.error("Error deleting review:", error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12"></div>
        <div className="col-lg-1 col-md-1 col-sm-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="home-head">Contact List</h2>
          <table className="tab">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}.</td>
                  <td>
                    <h6>{product.name}</h6>
                  </td>
                  <td>{product.email}</td>

                  <td>{product.message}</td>

                  <td className="qlik-col1">
                    <i
                      onClick={() => deleteUser(product._id)}
                      className="fa-solid fa-trash-can"
                      style={{ color: "#d83131" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Contactlist;
