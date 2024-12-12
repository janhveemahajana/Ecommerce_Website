import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./shopDetail.css";

const ShopDetail = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAlldashp"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/deletedashp/${productId}`)
      .then((response) => {
        console.log(response);
        setProducts((prevProduct) =>
          prevProduct.filter((product) => product._id !== productId)
        );
        toast.success(response.data.msg, { position: "top-right" });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="container-fluid shop-detail-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2 className="shopDetail-head text-center mb-4">
            ShopDetail Dashboard
          </h2>
          <div className="d-flex justify-content-end mb-3">
            <Link to={"/dashboardadd"}>
              <button className="btn btn-primary add-button">Add</button>
            </Link>
          </div>
          <table className="table table-bordered text-center">
            <thead className="thead-dark">
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
                    <td>
                      <h6>{product.title}</h6>
                    </td>
                    <td>
                      <input
                        type="image"
                        src={`http://localhost:5000${product.image}`}
                        alt={product.title}
                        className="product-image"
                        onError={(e) =>
                          (e.target.src = "/assets/img/featur-3.jpg")
                        }
                      />
                    </td>
                    <td>
                      <span className="truncated-description">
                        {truncateText(product.description, 100)}
                      </span>
                    </td>
                    <td>
                      <Link to={`/viewdashboardp/` + product._id}>
                        <i
                          className="fa-regular fa-eye"
                          style={{ color: "blue" }}
                        />
                      </Link>
                      <Link to={`/editdashboardp/` + product._id} className="mx-2">
                        <i
                          className="fa-regular fa-pen-to-square"
                          style={{ color: "#132c58" }}
                        />
                      </Link>
                      <i
                        onClick={() => deleteUser(product._id)}
                        className="fa-solid fa-trash-can"
                        style={{ color: "#d83131", cursor: "pointer" }}
                      />
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

export default ShopDetail;