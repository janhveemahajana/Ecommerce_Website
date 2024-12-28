import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function OurdealsEdit() {
  const products = {
    heading: "",
    image: "",
    heading1: "",
    heading2: "",
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
      .get(`http://localhost:5000/api/getonedeal/${id}`)
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
        `http://localhost:5000/api/updatedeal/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.msg, { position: "top-right" });
      navigate("/deals");
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
              <Link to="/deals">
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
                    className="form-control"
                    value={product.heading}
                    onChange={inputChangeHandler}
                    id="heading"
                    name="heading"
                    autoComplete="off"
                    placeholder="Heading"
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
                  <label htmlFor="heading1">Heading1</label>
                  <input
                    type="text"
                    value={product.heading1}
                    onChange={inputChangeHandler}
                    className="form-control"
                    id="heading1"
                    name="heading1"
                    autoComplete="off"
                    placeholder="Heading1"
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="heading2">Heading2</label>
                  <input
                    type="text"
                    value={product.heading2}
                    onChange={inputChangeHandler}
                    className="form-control"
                    id="heading2"
                    name="heading2"
                    autoComplete="off"
                    placeholder="Heading2"
                  />
                  <br />
                </div>
              </div>

              <div className="modal-footer">
                <Link to="/deals">
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

export default OurdealsEdit;
