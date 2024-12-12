import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
} from "./Home/Get/Home";
import { Shop } from "./Shop/Get/Shop";
import Sidebar from "./Component/Sidebar";
import Contact from "./Contact/Get/Contact";
import ShopDetail from "./ShopDetail/Dashboard/GetProduct/ShopDetail";
import DashboardAdd from "./ShopDetail/Dashboard/Addproduct/DashboardAdd";
import AddRelatedPro from "./ShopDetail/RelatedProducts/AddrelatedPro/AddRelatedPro";
import EditRelatedPro from "./ShopDetail/RelatedProducts/EditRelatedPro/EditRelatedPro";
import RelatedProduct from "./ShopDetail/RelatedProducts/GetRelatedPro/RelatedProduct";
import EditDashboardP from "./ShopDetail/Dashboard/Editproduct/EditDashboardP";
import ViewDashboard from "./ShopDetail/Dashboard/Viewproduct/ViewDashboard";
import ViewRelatedPro from "./ShopDetail/RelatedProducts/ViewrelatedPro/ViewRelatedPro";
import Add from "./Shop/Add/Addshop";
import Edit from "./Shop/Edit/Edit";
import Viewpro from "./Shop/View/Viewpro";
import Addcart from "./Cart/Add/Addcart";
import CartPage from "./Cart/Get/CartPage";
import EditCart from "./Cart/Edit/EditCart";
import ViewCart from "./Cart/View/ViewCart";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/support" element={<Contact />} />

        {/* Redirect */}

        {/*  -------------- SHOP-Detail -------------- */}

        <Route path="/detail" element={<ShopDetail/>} />
        <Route path="/relatedproducts" element={<RelatedProduct/>}/>

        {/* Add Product */}
 
        <Route path="/dashboardadd" element= {<DashboardAdd/>} />
        <Route path="/addrelatedpro" element= {<AddRelatedPro/>} />

        {/* Edit Product */}
        <Route path="/editrelatedproduct/:id" element={<EditRelatedPro/>}/>
        <Route path="/editdashboardp/:id" element={<EditDashboardP/>}/>

        {/* View Product */}
        <Route path="/viewdashboardp/:id" element={<ViewDashboard/>}/>
        <Route path="/viewrelatedproduct/:id" element={<ViewRelatedPro/>}/> 


        {/*  -------------- SHOP -------------- */}

        <Route path="/shop" element={<Shop />} />

        {/* Add Product */}
        <Route path="/addproduct" element={<Add/>}/>

        {/* Edit Product */}
        <Route path="/updateproduct/:id" element={<Edit/>}/>

        {/* View Product */}
        <Route path="/viewproduct/:id" element={<Viewpro/>}/>

        {/*  -------------- CART -------------- */}

        <Route path="/cart" element={<CartPage/>} />

        {/* Add Product */}
        <Route path="/addcartproduct" element={<Addcart/>}/>

        {/* Edit Product */}
        <Route path="/updatecartpro/:id" element={<EditCart/>}/>

        {/* View Product */}
        <Route path="/viewcartpro/:id" element={<ViewCart/>}/>        

      </Routes>
    </Router>
  );
}

export default App;
