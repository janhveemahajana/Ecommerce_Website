import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Viewhomevegeshop() {
    const products = {
        title: "",
        image: "",
        label: "",
        price: "",
        description: "",
      };
    
      const { id } = useParams();
      const [product, setProduct] = useState(products);
    
      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/getonevegetableshop/${id}`)
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

  return (
    <>
      <div
        className="modal fade show"
        id="update_heading"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        style={{
          display: "block",
          paddingRight: 18,
          marginTop: 60,
          paddingBottom: 50,
        }}
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <Link to="/vegetableshop">
                <i
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ color: "black", marginRight: "10px" }}
                ></i>
              </Link>
              <h3>View Vegetable Shop</h3>
              <Link to={`/editvegetableshop/` + product._id}><i className="fa-regular fa-pen-to-square" style={{color: "blue", marginLeft: "180px", fontSize: "24px"}}></i></Link>
            </div>

            <form>
              <div className="modal-body">
                <div className="form-group">
                  <span>Title - {product.title}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <br />
                  <br />
                  <input
                    type="image"
                    src={`http://localhost:5000${product.image}`}
                    alt={product.title}
                    className="product-image"
                    onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                    width={60}
                    height={60}
                  />
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Label - {product.label}</span>

                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Price - {product.price}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Description - {product.description}</span>
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewhomevegeshop;