import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function EditCart() {
  const products = {
    productname:"",
    image:"",
    price: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(products);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cartgetone/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/cartupdate/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/cart");
    } catch (error) {
      toast.error("Failed to update product!", { position: "top-right" });
      console.error(error);
    }
  };

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
              <h5 className="modal-title" id="exampleModalLabel">
                Edit
              </h5>
              <Link to="/cart">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  style={{
                    position: "relative",
                    left: "380px",
                    backgroundColor: "#f71128",
                    color: "white",
                    padding: 3,
                  }}
                >
                  <span aria-hidden="true">
                    <i className="fa-solid fa-xmark close-btn"></i>
                  </span>
                </button>
              </Link>
            </div>

            <form onSubmit={submitForm}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="productname">Product Name</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="productname"
                    value={product.productname}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Product Image</label>
                  <br />
                  <input
                    type="file"
                    onChange={(e) =>
                      setProduct({ ...product, image: e.target.files[0] })
                    }
                    className="form-control"
                    name="image"
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="price"
                    value={product.price}
                  />
                  <br />
                </div>

              </div>
              <div className="modal-footer">
                <Link to="/cart">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </Link>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCart;

