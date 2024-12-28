import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function EditRelatedPro() {
  const initialContactState = {
    title: "",
    mail: "",
    address: "",
    description: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialContactState);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getone/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  // const submitForm = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   for (const key in product) {
  //     formData.append(key, product[key]);
  //   }

  //   try {
  //     const response = await axios.put(
  //       `http://localhost:5000/api/update/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     toast.success(response.data.msg, { position: "top-right" });
  //     navigate("/relatedproducts");
  //   } catch (error) {
  //     toast.error("Failed to update product!", { position: "top-right" });
  //     console.error(error);
  //   }
  // };

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:7000/api/update/${id}`, product)
    .then((response) =>{
      toast.success(response.data.msg, {position:"top-right"})
      navigate("/viewrelatedproduct/675a80f91b7c9a17b3ef3afc")
    })
    .catch(error => console.log(error))
}




  return (
    <div
      className="modal fade show"
      id="update_heading"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style={{
        display: "block",
        marginTop: 60,
        paddingBottom: 50,
      }}
      aria-modal="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
             <Link to="/viewrelatedproduct/675a80f91b7c9a17b3ef3afc">
                            <i
                              className="fa fa-long-arrow-left"
                              aria-hidden="true"
                              style={{ color: "black", marginRight: "10px" }}
                            ></i>
                          </Link>
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Contact
            </h5>
            {/* <Link to="/viewrelatedproduct/675a80f91b7c9a17b3ef3afc">
              <button
                type="button"
                className="close"
                aria-label="Close"
                style={{
                  backgroundColor: "#f71128",
                  color: "white",
                  padding: 3,
                }}
              >
                <i className="fa-solid fa-xmark close-btn"></i>
              </button>
            </Link> */}
          </div>

          <form onSubmit={submitForm}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">User Name</label>
                <input
                  type="text"
                  onChange={inputChangeHandler}
                  className="form-control"
                  name="title"
                  value={product.title}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mail">Enter Your Mail</label>
                <input
                  type="text"
                  onChange={inputChangeHandler}
                  className="form-control"
                  name="mail"
                  value={product.mail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Enter Your Address</label>
                <input
                  type="text"
                  onChange={inputChangeHandler}
                  className="form-control"
                  name="address"
                  value={product.address}
                />
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
              </div>
            </div>

            <div className="modal-footer">
              <Link to="/viewrelatedproduct/675a80f91b7c9a17b3ef3afc">
                <button
                  type="button"
                  className="btn btn-secondary"
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
  );
}

export default EditRelatedPro;

