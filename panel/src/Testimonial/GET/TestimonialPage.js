import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getalltestimonal");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
  }, []);

  const deleteTestimonial = async (testimonialId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/deletetestimonial/${testimonialId}`);
      setTestimonials((prevTestimonials) =>
        prevTestimonials.filter((testimonial) => testimonial._id !== testimonialId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      toast.error("Failed to delete testimonial!", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12"></div>
        <div className="col-lg-1 col-md-1 col-sm-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="testimonial-page">Testimonial Page</h2>
          <Link to={"/addtestimonial"}>
            <button style={{ backgroundColor: "red", borderRadius: 5, color: "white", marginLeft: "60rem" }}>
              Add
            </button>
          </Link>

          <table className="tab">
            <thead>
              <tr style={{ backgroundColor: "darkslategray", color: "white" }}>
                <th>Sr No.</th>
                <th>Title</th>
                <th>Client Name</th>
                <th>Profession</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial, index) => {
                return (
                  <tr key={testimonial._id}>
                    <td>{index + 1}.</td>
                    <td>
                      <h6>{testimonial.title}</h6>
                    </td>
                    <td>
                      <h6>{testimonial.clientName}</h6>
                    </td>
                    <td>
                      <h6>{testimonial.profession}</h6>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5000${testimonial.image}`}
                        alt={testimonial.clientName}
                        className="testimonial-image"
                        onError={(e) => (e.target.src = "/assets/img/testimonial-1.jpg")}
                        style={{ width: "70px", height: "auto" }}
                      />
                    </td>
                    <td>
                      <Link to={`/view/` +testimonial._id}>
                        <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                      </Link>
                      <Link to={`/edit/`+testimonial._id} className="mx-2">
                        <i className="fa-regular fa-pen-to-square" style={{ color: "#132c58" }} />
                      </Link>

                      <i
                        onClick={() => deleteTestimonial(testimonial._id)}
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

export default TestimonialPage;
