import React from "react";
import "./page.css";
export const ContactList = () => {
    return (
        <div className="contactlist">
            <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h2 className="related-product-head text-center mb-4">Contact List</h2>
            <table className="tab">
              <tr>
                <th>Sr No.</th> 
                <th>Full Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  <h6>Vishnu Amdapure</h6>
                </td>
                <td>
                 
                  {/* <input
                    type="image"
                    src=""
                    alt="vishnuamdapure30@gmail.com"
                    width={220}
                    height={60}
                  /> */}
                  <h6>vishnuamdapure30@gmail.com</h6>
                </td>

                <td>
                 
                  {/* <input
                    type="image"
                    src=""
                    alt="Best Leading Company"
                    width={160}
                    height={60}
                  /> */}
                   <h6>Best Leading Company</h6>

                </td>
                {/* <td>vesitables Description</td> */}
                <td className="qlik-col1">
                  {/* <Link to="/contact-view"> 
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/contact-edit">
                
                     <i
                      className="fa-regular fa-pen-to-square"
                      
                      style={{ color: "#132c58" }}
                    /> 
                  </Link> */}
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>2.</td>
                <td>
                  <h6>Jyoti S</h6>
                </td>
                <td>
                 
                <h6>jyotis@gmail.com</h6>
                </td>

                <td>
                 
                <h6>Best Leading Company</h6>
                </td>

                {/* <td>Free on order over $300</td> */}
                <td className="qlik-col1">
                  {/* <Link to="/contact-view"> 
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/contact-edit">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link> */}
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>
  
              <tr>
                <td>3.</td>
                <td>
                  <h6>Janhvee Mahajan</h6>
                </td>
                <td>
                 
                <h6>janhveemahajan@gmail.com</h6>
                </td>

                <td>
                 
                <h6>Best Leading Company</h6>
                </td>

                {/* <td>100% security payment</td> */}
                 <td className="qlik-col1">
                {/* <Link to="/contact-view"> 
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/contact-edit">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link> */}
                  <i
                    className="fa-solid fa-trash-can"
                    style={{ color: "#d83131" }}
                  />
                </td>
              </tr>

              <tr>
                <td>3.</td>
                <td>
                  <h6>Bhakti Waghmare</h6>
                </td>
                <td>
                 
                <h6>bhaktiwaghmare@gmail.com</h6>
                </td>

                <td>
                 
                <h6>Best Leading Company</h6>
                </td>

                {/* <td>100% security payment</td> */}
                 <td className="qlik-col1">
                {/* <Link to="/contact-view"> 
                    <i className="fa-regular fa-eye" style={{ color: "blue" }} />
                  </Link>
                  <Link to="/contact-edit">
                    <i
                      className="fa-regular fa-pen-to-square"
                      style={{ color: "#132c58" }}
                    />
                  </Link> */}
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
    </div>
    );
    
};

export default ContactList;