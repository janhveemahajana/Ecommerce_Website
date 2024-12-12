import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Viewpro() {
  const users = {
    heading: "",
    title: "",
    label: "",
    image: "",
    description: "",
    newprice: "",
    oldprice: "",
  };

  const { id } = useParams();
  const [products, setProducts] = useState(users);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/shopgetone/${id}`)
      .then((response) => {
        setProducts(response.data);
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
              <Link to="/shop">
                <i
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ color: "black", marginRight: "10px" }}
                ></i>
              </Link>
              <h3>View Shop </h3>
              <Link to={`/updateproduct/` + products._id}>
                <i
                  class="fa-regular fa-pen-to-square"
                  style={{
                    color: "blue",
                    marginLeft: "180px",
                    fontSize: "24px",
                  }}
                ></i>
              </Link>
            </div>

            <form>
              <div className="modal-body">
                <div className="inputGroup">
                  <span>Heading - {products.heading}</span>
                </div>
                <br />
                <div className="inputGroup">
                  <span>Title - {products.title}</span>
                </div>{" "}
                <br />
                <div className="inputGroup">
                  <span>Label - {products.label}</span>
                </div>{" "}
                <br />
                <div className="inputGroup">
                  <label htmlFor="image">Image - </label>
                  <img
                    type="image"
                    src={`http://localhost:5000${products.image}`}
                    alt={products.title}
                    className="product-image"
                    onError={(e) => (e.target.src = "/assets/img/featur-3.jpg")}
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>{" "}
                <br />
                <div className="inputGroup">
                  <span>Description - {products.description}</span>
                </div>{" "}
                <br />
                <div className="inputGroup">
                  <span>NewPrice - {products.newprice}</span>
                </div>{" "}
                <br />
                <div className="inputGroup">
                  <span>OldPrice - {products.oldprice}</span>
                </div>{" "}
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Viewpro;
