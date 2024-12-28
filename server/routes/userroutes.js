import express from "express";
import { create, createbanner, createcart, createcontact, createdeals, createExoticfruit, createFacts, createhero, createHvegetable, createnewcontact, createnewtestimonal, createSDreview, createService, createshop, createslider, dashboardcreate, dashboarddelete, dashboardgetAll, dashboardgetOne, dashboardupdate, deletecart, deletecontact, deletedeals, deleteFacts, deleteHvegetable, deleteSDreview, deleteService, deleteshop, deletetestimonial, deleteUser, getAll, getAllcart, getAllcontact, getAlldeals, getAllHvegetable, getAllSDreview, getAllshop, getalltestimonal, getbanner, getexoticfruit, gethero, getnewcontact, getOne, getOnecart, getOnecontact, getOnedeals, getoneFacts, getOneHvegetable, getOnenewcontact, getoneServices, getOneshop, getServices, getSFacts, getsingletestimonal, sliderdelete, slidergetAll, slidergetone, sliderupdate, update, updatebanner, updatecart, updatecontact, updatedeals, updateExoticfruit, updateFacts, updatehero, updateHvegetable, updatenewcontact, updateService, updateshop, updatetestimonal } from "../controller/usercontroller.js";
import multer from "multer";

const route = express.Router();

const upload = multer({ dest: "uploads/" });

route.post("/create", upload.single("image"), create);
route.get("/getAll", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", upload.single("image"), update);
route.delete("/delete/:id", deleteUser)

export default route;

// shop detail Dashboard products routes
route.post("/createdashp", upload.single("image"), dashboardcreate);
route.get("/getAlldashp", dashboardgetAll);
route.get("/getonedashp/:id", dashboardgetOne);
route.put("/updatedashp/:id", upload.single("image"), dashboardupdate);
route.delete("/deletedashp/:id", dashboarddelete)

// shop products routes
route.post("/shopcreate", upload.single("image"), createshop);
route.get("/shopgetAll", getAllshop);
route.get("/shopgetone/:id", getOneshop);
route.put("/shopupdate/:id", upload.single("image"), updateshop);
route.delete("/shopdelete/:id", deleteshop)

// cart products routes
route.post("/cartcreate", upload.single("image"), createcart);
route.get("/cartgetAll", getAllcart);
route.get("/cartgetone/:id", getOnecart);
route.put("/cartupdate/:id", upload.single("image"), updatecart);
route.delete("/cartdelete/:id", deletecart)

// contact routes
route.post("/createcontact", createcontact);
route.get("/getAllcontact", getAllcontact);
route.get("/getonecontact/:id", getOnecontact);
route.put("/updatecontact/:id", updatecontact);
route.delete("/deletecontact/:id", deletecontact)

//contact data routes
route.post("/createnewcontact", createnewcontact);
route.get("/getnewcontact", getnewcontact);
route.get("/getonenewcontact", getOnenewcontact);
route.put("/updatenewcontact/:id", updatenewcontact);

//hero data routes
route.post("/createhero", createhero);
route.get("/gethero", gethero);
route.put("/updatehero/:id", updatehero);

// slider products routes
route.post("/createslider", upload.single("image"), createslider);
route.get("/slidergetAll", slidergetAll);
route.get("/slidergetone/:id", slidergetone);
route.put("/sliderupdate/:id", upload.single("image"), sliderupdate);
route.delete("/sliderdelete/:id", sliderdelete)

// Rotes for services
route.post("/createservice", upload.single("icon"), createService);
route.get("/getservices", getServices);
route.get("/getoneservices/:id", getoneServices);
route.put("/updateservice/:id", upload.single("icon"), updateService);
route.delete("/deleteservice/:id", deleteService);

//Routes for facts
route.post("/createfacts", upload.single("icon"), createFacts);
route.get("/getfacts", getSFacts);
route.get("/getonefacts/:id", getoneFacts);
route.put("/updatefacts/:id", upload.single("icon"), updateFacts);
route.delete("/deletefacts/:id", deleteFacts);

// APIS for Banner
route.post("/createbanner", createbanner);
route.get("/getbanner", getbanner);
route.put("/updatebanner/:id", upload.single("image"), updatebanner);

// APIS for Deals
route.post("/createdeal", upload.single("image"), createdeals);
route.get("/getalldeal",getAlldeals);
route.get("/getonedeal/:id",getOnedeals);
route.put("/updatedeal/:id", upload.single("image"),updatedeals)
route.delete("/deletedeal/:id",deletedeals)

// APIs for Exotic Fruits
route.post("/createExoticfruit", upload.single("image"), createExoticfruit);
route.get("/getexoticfruit", getexoticfruit);
route.put("/updateExoticfruit/:id", upload.single("image"), updateExoticfruit);

// API's for Testimonial
route.post("/createnewtestimonal", upload.single("image"),createnewtestimonal);
route.get("/getalltestimonal", getalltestimonal);
route.put("/updatetestimonal/:id", upload.single("image"), updatetestimonal);
route.get("/getsingletestimonal/:id", getsingletestimonal);
route.delete("/deletetestimonial/:id", deletetestimonial);

// Routes for Shop Detail Review
route.post("/createSDreview", createSDreview);
route.get("/getAllSDreview", getAllSDreview);
route.delete("/deleteSDreview/:id", deleteSDreview)

// Routes for Home vegetable shop
route.post("/createvegetableshop", upload.single("image"), createHvegetable);
route.get("/getAllvegetableshop", getAllHvegetable);
route.get("/getonevegetableshop/:id", getOneHvegetable);
route.put("/updatevegetableshop/:id", upload.single("image"), updateHvegetable);
route.delete("/deletevegetableshop/:id", deleteHvegetable);