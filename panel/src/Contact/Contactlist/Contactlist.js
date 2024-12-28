import React from "react";
// import { Link } from "react-router-dom";

const Contactlist = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12"></div>
        <div className="col-lg-1 col-md-1 col-sm-12"></div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="home-head">Contact List</h2>
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
              <td>vishnuamdapure30@gmail.com"</td>

              <td>Best Leading Company</td>

              <td className="qlik-col1">
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
              <td>jyotis@gmail.com"</td>

              <td>Best Leading Company</td>

              <td className="qlik-col1">
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
              <td>janhveemahajan@gmail.com</td>

              <td>Best Leading Company</td>

              <td className="qlik-col1">
                <i
                  className="fa-solid fa-trash-can"
                  style={{ color: "#d83131" }}
                />
              </td>
            </tr>

            <tr>
              <td>4.</td>
              <td>
                <h6>Bhakti Waghmare</h6>
              </td>
              <td>bhaktiwaghmare@gmail.com</td>

              <td>Best Leading Company</td>

              <td className="qlik-col1">
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
export default Contactlist;
