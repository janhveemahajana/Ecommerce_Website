import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./Shop/Get/Shop";
import Sidebar from "./Component/Sidebar";
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
import Reviews from "./ShopDetail/Reviews/Reviews";
import Contactlist from "./Contact/Contactlist/Contactlist";
import ContactEditdata from "./Contact/Contactdata/ContactEditdata";
import Contactdata from "./Contact/Contactdata/Contactdata";
import Hero from "./Home/Hero/Hero";
import HeroEdit from "./Home/Hero/HeroEdit";
import { Home } from "./Home/Slider/Get/Home";
import AddSlider from "./Home/Slider/Add/AddSlider";
import EditSlider from "./Home/Slider/Edit/EditSlider";
import { Services } from "./Home/Services/Get/Services";
import AddServices from "./Home/Services/Add/AddServices";
import EditServices from "./Home/Services/Edit/EditServices";
import { Facts } from "./Home/Facts/Get/Facts";
import AddFacts from "./Home/Facts/Add/AddFacts";
import Editfacts from "./Home/Facts/Edit/Editfacts";
import { CheckoutFormData } from "./Checkout/CheckoutFormData";
import Banner from "./Shop/Banner/Banner";
import BannerEdit from "./Shop/Banner/BannerEdit";
import { Ourdeals } from "./Home/OurDeals/GET/Ourdeals";
import Ourdealsadd from "./Home/OurDeals/ADD/Ourdealsadd";
import OurdealsEdit from "./Home/OurDeals/EDIT/OurdealsEdit";
import Exoticfruits from "./Home/Exoticfruits/Exoticfruits";
import ExoticfruitsEdit from "./Home/Exoticfruits/ExoticfruitsEdit";
import ViewTestimonial from "./Testimonial/VIEW/ViewTestimonial";
import EditPage from "./Testimonial/EDIT/EditPage";
import AddTestimonial from "./Testimonial/ADD/AddTestimonialPage";
import TestimonialPage from "./Testimonial/GET/TestimonialPage";
import Homevegetableshop from "./Home/Vegetable Shop/GET/Homevegetableshop";
import AddvegetableShop from "./Home/Vegetable Shop/ADD/AddvegetableShop";
import Editvegetableshop from "./Home/Vegetable Shop/EDIT/Editvegetableshop";
import Viewhomevegeshop from "./Home/Vegetable Shop/VIEW/Viewhomevegeshop";
import { Featuredpro } from "./ShopDetail/FeaturedProduct/GET/Featuredpro";
import AddFeaturepro from "./ShopDetail/FeaturedProduct/ADD/AddFeaturepro";
import EditFeaturepro from "./ShopDetail/FeaturedProduct/EDIT/EditFeaturepro";
import Horganic from "./Home/Organic Shop/GET/Horganic";
import Addorganic from "./Home/Organic Shop/ADD/Addorganic";
import ViewOrganic from "./Home/Organic Shop/VIEW/ViewOrganic";
import Editorganic from "./Home/Organic Shop/EDIT/Editorganic";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* --------Home--------- */}
        
        <Route path="/hero" element={<Hero/>}/>        
        <Route path="/heroedit/:id" element={<HeroEdit/>}/> 

        {/* ----Slider------ */}

        <Route exact path="/slider" element={<Home/>} />
        <Route path="/addslide" element={<AddSlider/>}/>
        <Route path="/updateslide/:id" element={<EditSlider/>}/>
        
        {/* ----SERVICES----- */}
        <Route path="/services" element={<Services/>}/>
        <Route path="/addservices" element={<AddServices/>}/>
        <Route path="/updateservices/:id" element={<EditServices/>}/>

        {/* ------FACTS------------ */}
        <Route path="/facts" element={<Facts/>}/>
        <Route path="/addfacts" element={<AddFacts/>}/>
        <Route path="/updatefacts/:id" element={<Editfacts/>}/>

        {/* ------Our Deals------------ */}
        <Route path="/deals" element={<Ourdeals/>}/>
        <Route path="/adddeals" element={<Ourdealsadd/>}/>
        <Route path="/updatedeals/:id" element={<OurdealsEdit/>}/>

        {/* ------exotic------------ */}
        <Route path="/exoticfruits" element={<Exoticfruits/>}/>        
        <Route path="/ExoticfruitsEdit/:id" element={<ExoticfruitsEdit/>}/> 

        {/* -------Vegetable shop------------- */}
        <Route path="/vegetableshop" element={<Homevegetableshop/>}/>
        <Route path="/addvegetableshop" element= {<AddvegetableShop/>} />
        <Route path="/editvegetableshop/:id" element={<Editvegetableshop/>}/>
        <Route path="/viewvegetableshop/:id" element={<Viewhomevegeshop/>}/> 

        {/* -------Our Organic Product------------- */}
        <Route path="/organicpro" element={<Horganic/>}/>
        <Route path="/addorganicpro" element= {<Addorganic/>} />
        <Route path="/editorganicpro/:id" element={<Editorganic/>}/>
        <Route path="/vieworganicpro/:id" element={<ViewOrganic/>}/> 

        {/* Redirect */}

        {/*  -------------- SHOP-Detail -------------- */}

        <Route path="/detail" element={<ShopDetail/>} />
        <Route path="/relatedproducts" element={<RelatedProduct/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/featurepro" element={<Featuredpro/>}/>

        {/* Add Product */}
 
        <Route path="/dashboardadd" element= {<DashboardAdd/>} />
        <Route path="/addrelatedpro" element= {<AddRelatedPro/>} />
        <Route path="/addfeaturepro" element= {<AddFeaturepro/>} />

        {/* Edit Product */}
        <Route path="/editrelatedproduct/:id" element={<EditRelatedPro/>}/>
        <Route path="/editdashboardp/:id" element={<EditDashboardP/>}/>
        <Route path="/editfeature/:id" element={<EditFeaturepro/>}/>

        {/* View Product */}
        <Route path="/viewdashboardp/:id" element={<ViewDashboard/>}/>
        <Route path="/viewrelatedproduct/:id" element={<ViewRelatedPro/>}/> 


        {/*  -------------- SHOP -------------- */}

        <Route path="/shop" element={<Shop />} />
        <Route path="/banner" element={<Banner/>} />
        <Route path="/banneredit/:id" element={<BannerEdit/>}/> 

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

        {/*  -------------- TESTIMONIAL -------------- */}

        <Route path="/view/:id" element={<ViewTestimonial/>}/>
        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/addtestimonial" element={<AddTestimonial/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>

        {/*  -------------- Contact -------------- */}

        <Route path="/contactlist" element={<Contactlist/>}/>        
        <Route path="/contactdata" element={<Contactdata/>}/>        
        <Route path="/contactdataedit/:id" element={<ContactEditdata/>}/>        

        {/*  -------------- Checkout -------------- */}

        <Route path="/checkout" element={<CheckoutFormData/>}/>

      </Routes>
    </Router>
  );
}

export default App;
