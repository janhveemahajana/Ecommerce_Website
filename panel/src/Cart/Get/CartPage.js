import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cartgetAll");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (productId) => {
    await axios
      .delete(`http://localhost:5000/api/cartdelete/${productId}`)
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


  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h2 className="cart-page">CartPage</h2>
           <Link to={"/addcartproduct"}><button style={{backgroundColor:"#c82c2c",padding:" 10px 20px", color:"white"}}>Add</button></Link>
            
            <table className="tab">
              <thead>
                <tr style={{backgroundColor:"darkslategray", color:"white"}}>
                  <th>Sr No.</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}.</td>
                    <td>
                      <h6>{product.productname}</h6>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5000${product.image}`}
                        alt={product.productname}
                        className="product-image"
                        onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                      />
                    </td>
                    <td>
                      <h6>{product.price}</h6>
                    </td>
                    <td>
                      <Link to={`/viewcartpro/` + product._id}>
                        <i
                          className="fa-regular fa-eye"
                          style={{ color: "blue" }}
                        />
                      </Link>
                      <Link
                        to={`/updatecartpro/` + product._id}
                        className="mx-2"
                      >
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

export default CartPage;
