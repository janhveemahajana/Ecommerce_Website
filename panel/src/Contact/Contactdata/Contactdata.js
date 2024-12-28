import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./contactdata.css"; // Import the CSS file

function Contactdata() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getnewcontact")
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contact data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    navigate("/contactdataedit/:id", { state: product });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>No contact data found</p>;
  }

  return (
    <div className="contactdata-container">
      <div className="contactdata-card">
        <h3>Contact Information <i onClick={handleEdit} className="fa-regular fa-pen-to-square" style={{color: "blue", fontSize: "24px"}}></i></h3>
        
        <p>
          <strong>Address:</strong> {product.address}
        </p>
        <p>
          <strong>Mail:</strong> {product.mail}
        </p>
        <p>
          <strong>Telephone:</strong> {product.telephone}
        </p>
      </div>
    </div>
  );
}

export default Contactdata;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./contactdata.css"

// function Contactdata() {
//   const [product, setProduct] = useState(null); // Initialize state as null
//   const [loading, setLoading] = useState(true); // Loading state

//   const navigate = useNavigate();

//   // Fetch contact data
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/getnewcontact")
//       .then((response) => {
//         console.log("API Response:", response.data);
//         setProduct(response.data); // Assuming the API returns an array
//         setLoading(false); // Data loaded
//       })
//       .catch((error) => {
//         console.error("Error fetching contact data:", error);
//         setLoading(false); // Stop loading on error
//       });
//   }, []);

//   // Handle Edit button click
//   const handleEdit = () => {
//     navigate("/contactdataedit/:id", { state: product }); // Pass data to Edit page
//   };

//   if (loading) {
//     return <p>Loading...</p>; // Show loading state until data is fetched
//   }

//   if (!product) {
//     return <p>No contact data found</p>; // If no data is available
//   }

//   return (
//     <div className="container">
//       <h3>Contact Information</h3>
//       <p>
//         <strong>Address:</strong> {product.address}
//       </p>
//       <p>
//         <strong>Mail:</strong> {product.mail}
//       </p>
//       <p>
//         <strong>Telephone:</strong> {product.telephone}
//       </p>
//       <button onClick={handleEdit} className="btn btn-primary">
//         Edit
//       </button>
//     </div>
//   );
// }

// export default Contactdata;










// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// function Contactdata() {
//   const products = {
//     address: "",
//     mail: "",
//     telephone: "",
//   };

//   const { id } = useParams();
//   const [product, setProduct] = useState(products);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/getonenewcontact/${id}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   return (
//     <>
//       <div
//         className="modal fade show"
//         id="update_heading"
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         style={{
//           display: "block",
//           paddingRight: 18,
//           marginTop: 60,
//           paddingBottom: 50,
//         }}
//         aria-modal="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">

//               <h3>Contact</h3>
//               <Link to={`/editrelatedproduct/` + product._id}>
//                 <i
//                   class="fa-regular fa-pen-to-square"
//                   style={{
//                     color: "blue",
//                     marginLeft: "180px",
//                     fontSize: "24px",
//                   }}
//                 ></i>
//               </Link>
//             </div>

//             <form>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <span>Address - {product.address}</span>
//                   <br />
//                   <br />
//                 </div>

//                 <div className="form-group">
//                   <span>Mail - {product.mail}</span>

//                   <br />
//                   <br />
//                 </div>

//                 <div className="form-group">
//                   <span>Telephone - {product.telephone}</span>
//                   <br />
//                   <br />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contactdata;
