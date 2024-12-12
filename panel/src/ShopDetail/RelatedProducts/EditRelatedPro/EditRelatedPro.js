import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function EditRelatedPro() {
  const products = {
    title: "",
    image: "",
    label: "",
    price: "",
    description: "",
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
      .get(`http://localhost:5000/api/getone/${id}`)
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
        `http://localhost:5000/api/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/relatedproducts");
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
              <Link to="/relatedproducts">
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
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="title"
                    value={product.title}
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Image</label>
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
                  <label htmlFor="label">Label</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="label"
                    value={product.label}
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="price"
                    value={product.price}
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="description"
                    value={product.description}
                  />
                  <br />
                </div>
              </div>

              <div className="modal-footer">
                <Link to="/relatedproducts">
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

export default EditRelatedPro;
