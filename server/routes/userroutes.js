import express from "express";
import { create, createcart, createshop, dashboardcreate, dashboarddelete, dashboardgetAll, dashboardgetOne, dashboardupdate, deletecart, deleteshop, deleteUser, getAll, getAllcart, getAllshop, getOne, getOnecart, getOneshop, update, updatecart, updateshop } from "../controller/usercontroller.js";
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

// shop products routes
route.post("/cartcreate", upload.single("image"), createcart);
route.get("/cartgetAll", getAllcart);
route.get("/cartgetone/:id", getOnecart);
route.put("/cartupdate/:id", upload.single("image"), updatecart);
route.delete("/cartdelete/:id", deletecart)