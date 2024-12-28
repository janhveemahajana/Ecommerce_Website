import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewRelatedPro() {
    const products = {
        title: "",
        mail: "",
        address: "",
        description: "",
      };
    
      const { id } = useParams();
      const [product, setProduct] = useState(products);
    
      useEffect(() => {
        axios
          .get(`http://localhost:7000/api/getone/${id}`)
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
              {/* <Link to="/relatedproducts">
                <i
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ color: "black", marginRight: "10px" }}
                ></i>
              </Link> */}
              <h3>View Contact </h3>
              <Link to={`/editrelatedproduct/` + product._id}><i class="fa-regular fa-pen-to-square" style={{color: "blue", marginLeft: "180px", fontSize: "24px"}}></i></Link>
            </div>

            <form>
              <div className="modal-body">
                <div className="form-group">
                  <span>User Name - {product.title}</span>
                  <br />
                  <br />
                </div>


                <div className="form-group">
                  <span>E-Mail - {product.mail}</span>

                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Address - {product.address}</span>
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

export default ViewRelatedPro;
