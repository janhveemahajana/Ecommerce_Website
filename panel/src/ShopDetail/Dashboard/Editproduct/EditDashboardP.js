import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function EditDashboardP() {
  const products = {
    heading: "",
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
    weight: "",
    origin: "",
    quality: "",
    check: "",
    minweight: "",
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
      .get(`http://localhost:5000/api/getonedashp/${id}`)
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
        `http://localhost:5000/api/updatedashp/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/detail");
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
              <Link to="/detail">
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
                  <label htmlFor="heading">Heading</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="heading"
                    value={product.heading}
                  />
                  <br />
                </div>
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
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="category"
                    value={product.category}
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

                <div className="form-group">
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="number"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="weight"
                    value={product.weight}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="origin">Country of Origin</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="origin"
                    value={product.origin}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="quality">Quality</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="quality"
                    value={product.quality}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="check">Check</label>
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="check"
                    value={product.check}
                  />
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="minweight">Min Weight</label>
                  <input
                    type="number"
                    onChange={inputChangeHandler}
                    className="form-control"
                    name="minweight"
                    value={product.minweight}
                  />
                  <br />
                </div>
              </div>
              <div className="modal-footer">
                <Link to="/detail">
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

export default EditDashboardP;
