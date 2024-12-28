
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewTestimonial = () => {
  const { id } = useParams();
  const [testimonial, setTestimonial] = useState({
    title: "",
    description: "",
    clientName: "",
    profession: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getsingletestimonal/${id}`)
      .then((response) => {
        setTestimonial(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonial:", error);
      });
  }, [id]);

  return (
    <>
      <div
        className="modal fade show"
        id="view_testimonial"
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
              <Link to="/testimonial">
                <i
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                  style={{ color: "black", marginRight: "10px" }}
                ></i>
              </Link>
              <h3>View Testimonial</h3>
              <Link to={`/edit/`+ testimonial._id}>
                <i
                  className="fa-regular fa-pen-to-square"
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
                <div className="form-group">
                  <span>Title - {testimonial.title}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Description - {testimonial.description}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Client Name - {testimonial.clientName}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <span>Profession - {testimonial.profession}</span>
                  <br />
                  <br />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <br />
                  <br />
                  <input
                    type="image"
                    src={
                      testimonial.image && testimonial.image.trim() !== ""
                        ? `http://localhost:5000${testimonial.image}`
                        : "/assets/img/testimonial-1.jpg"
                    }
                    alt={testimonial.clientName}
                    className="testimonial-image"
                    onError={(e) =>
                      (e.target.src = "/assets/img/testimonial-1.jpg")
                    }
                    width={60}
                    height={60}
                  />
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
};

export default ViewTestimonial;
