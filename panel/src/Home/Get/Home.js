import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h2 className="home-head">Home</h2>
            <button className="add-button">Add</button>
            <table className="tab">
              <tr>
                <th>Sr No.</th>
                <th>Heading</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  <h6>Organic Veggies & Fruits Foods</h6>
                </td>
                <td>
                 
                  <input
                    type="image"
                    src=""
                    alt="vesitables"
                    width={160}
                    height={60}
                  />
                </td>
                <td>vesitables Description</td>
                <td className="qlik-col1">
                  <Link to="/organic-view">
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/organic-edit">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>2.</td>
                <td>
                  <h6>Free Shipping</h6>
                </td>
                <td>
                 
                  <input
                    type="image"
                    src=""
                    alt="shipping"
                    width={160}
                    height={60}
                  />
                </td>
                <td>Free on order over $300</td>
                <td className="qlik-col1">
                  <Link to="/">
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>3.</td>
                <td>
                  <h6>Security Payment</h6>
                </td>
                <td>
                 
                  <input
                    type="image"
                    src=""
                    alt="security"
                    width={160}
                    height={60}
                  />
                </td>
                <td>100% security payment</td>
                <td className="qlik-col1">
                  <Link to="/">
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>4.</td>
                <td>
                  <h6>30 Day Return</h6>
                </td>
                <td>
                 
                  <input
                    type="image"
                    src=""
                    alt="30 day return"
                    width={160}
                    height={60}
                  />
                </td>
                <td>30 day money guarantee</td>
                <td className="qlik-col1">
                  <Link to="/">
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>5.</td>
                <td>
                  <h6>24/7 Support</h6>
                </td>
                <td>
                 
                  <input
                    type="image"
                    src=""
                    alt="support"
                    width={160}
                    height={60}
                  />
                </td>
                <td>Support every time fast</td>
                <td className="qlik-col1">
                  <Link to="/">
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link>
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
            </table>
          </div>
        </div>
      </div>
    );
};

// export const OurAim = () => {
//     return (
//         <div className="home">
//             <h1>GeeksforGeeks Aim</h1>
//         </div>
//     );
// };

// export const OurVision = () => {
//     return (
//         <div className="home">
//             <h1>GeeksforGeeks Vision</h1>
//         </div>
//     );
// };