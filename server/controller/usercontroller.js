import Product from "../modal/usermodel.js";
import ShopDdashboard from "../modal/dashboardmodel.js";
import Shop from "../modal/shopmodel.js";
import Cart from "../modal/cartmodel.js";
import Contact from "../modal/contactmodel.js";
import ContactData from "../modal/contactnewmodel.js";
import Hero from "../modal/heromodel.js";
import Slider from "../modal/slidermodel.js";
import Service from "../modal/servicemodel.js";
import Facts from "../modal/factsmodel.js";
import Banner from "../modal/bannermodel.js";
import OurDeals from "../modal/dealsmodel.js";
import Exoticfruit from "../modal/Exoticfruitmodel.js";
import Testimonal from "../modal/testimonalmodel.js";
import ShopDReview from "../modal/shopDreviewmodel.js";
import Vegetableshop from "../modal/homevegetableshp.js";
import Checkout from "../modal/checkoutmodel.js";
import ContactForm from "../modal/contactformmodel.js";
import FeaturedProduct from "../modal/featuredpromodel.js";
import Organic from "../modal/fruithomemodel.js";
import multer from "multer";

// API's for Related Products

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage });

export const create = async (req, res) => {
  try {
    const { title, label, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Product({
      title,
      label,
      price,
      description,
      image,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const productData = await Product.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, label, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Product.findByIdAndUpdate(
      id,
      { title, label, price, description, image },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API,s for shop Details Dashboard

export const dashboardcreate = async (req, res) => {
  try {
    const {
      heading,
      title,
      category,
      price,
      description,
      weight,
      origin,
      quality,
      check,
      minweight,
    } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new ShopDdashboard({
      heading,
      title,
      image,
      category,
      price,
      description,
      weight,
      origin,
      quality,
      check,
      minweight,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const dashboardgetAll = async (req, res) => {
  try {
    const productData = await ShopDdashboard.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const dashboardgetOne = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await ShopDdashboard.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const dashboardupdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, label, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await ShopDdashboard.findByIdAndUpdate(
      id,
      { title, label, price, description, image },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const dashboarddelete = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await ShopDdashboard.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await ShopDdashboard.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API,s for shop page
export const createshop = async (req, res) => {
  try {
    const { heading, title, label, description, newprice, oldprice } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Shop({
      heading,
      title,
      image,
      label,
      description,
      newprice,
      oldprice,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllshop = async (req, res) => {
  try {
    const productData = await Shop.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOneshop = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Shop.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateshop = async (req, res) => {
  try {
    const id = req.params.id;
    const { heading, title, label, newprice, oldprice, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Shop.findByIdAndUpdate(
      id,
      { heading, title, label, description, image, newprice, oldprice },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteshop = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Shop.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Shop.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API,s for cart page
export const createcart = async (req, res) => {
  try {
    const { productname, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Cart({
      productname,
      image,
      price,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllcart = async (req, res) => {
  try {
    const productData = await Cart.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOnecart = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Cart.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatecart = async (req, res) => {
  try {
    const id = req.params.id;
    const { productname, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Cart.findByIdAndUpdate(
      id,
      { productname, image, price },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletecart = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Cart.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Cart.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API,s for contact page

export const createcontact = async (req, res) => {
  try {
    const { title, mail, address, description } = req.body;

    const productData = new Contact({
      title,
      mail,
      address,
      description,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "Contact added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllcontact = async (req, res) => {
  try {
    const productData = await Contact.find();

    if (!productData) {
      return res.status(404).json({ msg: "Contact data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOnecontact = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Contact.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatecontact = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, mail, address, description } = req.body;

    const updatedData = await Contact.findByIdAndUpdate(
      id,
      { title, mail, address, description },
      { new: true }
    );

    res.status(200).json({
      msg: "Contact updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletecontact = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Contact.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Contact.findByIdAndDelete(id);
    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

//new apis for contact
export const createnewcontact = async (req, res) => {
  try {
    const { address, mail, telephone } = req.body;

    // Check if a contact already exists
    const existingContact = await ContactData.findOne({});
    if (existingContact) {
      return res
        .status(400)
        .json({ msg: "Contact already exists. Use update API." });
    }

    // If no existing contact, create a new one
    const contactData = new ContactData({
      address,
      mail,
      telephone,
    });

    const savedData = await contactData.save();
    res
      .status(200)
      .json({ msg: "Contact added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getnewcontact = async (req, res) => {
  try {
    const productData = await ContactData.findOne(); // Fetch only one contact

    if (!productData) {
      return res.status(404).json({ msg: "Contact data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOnenewcontact = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await ContactData.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatenewcontact = async (req, res) => {
  try {
    const { address, mail, telephone } = req.body;

    // Update the first (and only) contact
    const updatedData = await ContactData.findOneAndUpdate(
      {},
      { address, mail, telephone },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ msg: "No contact data found to update." });
    }

    res.status(200).json({
      msg: "Contact updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// api's for hero

export const createhero = async (req, res) => {
  try {
    const { headingone, headingtwo } = req.body;

    // Check if a contact already exists
    const existinghero = await Hero.findOne({});
    if (existinghero) {
      return res
        .status(400)
        .json({ msg: "Contact already exists. Use update API." });
    }

    // If no existing contact, create a new one
    const hero = new Hero({
      headingone,
      headingtwo,
    });

    const savedData = await hero.save();
    res
      .status(200)
      .json({ msg: "Contact added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const gethero = async (req, res) => {
  try {
    const productData = await Hero.findOne(); // Fetch only one contact

    if (!productData) {
      return res.status(404).json({ msg: "Hero data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatehero = async (req, res) => {
  try {
    const { headingone, headingtwo } = req.body;

    // Update the first (and only) contact
    const updatedData = await Hero.findOneAndUpdate(
      {},
      { headingone, headingtwo },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ msg: "No Hero data found to update." });
    }

    res.status(200).json({
      msg: "Data updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Api's for slider

export const createslider = async (req, res) => {
  try {
    const { label } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Slider({
      label,
      image,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Slide added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const slidergetAll = async (req, res) => {
  try {
    const productData = await Slider.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const slidergetone = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Slider.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const sliderupdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { label } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Slider.findByIdAndUpdate(
      id,
      { label, image },
      { new: true }
    );

    res.status(200).json({
      msg: "Slide updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const sliderdelete = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Slider.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Slider.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API's for services

// Create a new service
export const createService = async (req, res) => {
  try {
    const { title, description } = req.body;
    const icon = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Service({
      title,
      description,
      icon,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Services added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getServices = async (req, res) => {
  try {
    const productData = await Service.find();

    if (!productData) {
      return res.status(404).json({ msg: "Services data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getoneServices = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Service.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Services data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const icon = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Service.findByIdAndUpdate(
      id,
      { title, description, icon },
      { new: true }
    );

    res.status(200).json({
      msg: "Service updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Service.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Service not exist" });
    }

    await Service.findByIdAndDelete(id);
    res.status(200).json({ msg: "Service deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API's for Facts
export const createFacts = async (req, res) => {
  try {
    const { title, description } = req.body;
    const icon = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Facts({
      title,
      description,
      icon,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Services added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSFacts = async (req, res) => {
  try {
    const productData = await Facts.find();

    if (!productData) {
      return res.status(404).json({ msg: "Services data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getoneFacts = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Facts.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Services data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateFacts = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const icon = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Facts.findByIdAndUpdate(
      id,
      { title, description, icon },
      { new: true }
    );

    res.status(200).json({
      msg: "Service updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteFacts = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Facts.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Service not exist" });
    }

    await Facts.findByIdAndDelete(id);
    res.status(200).json({ msg: "Service deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// SHOP BANNER

export const createbanner = async (req, res) => {
  try {
    const { heading, image } = req.body;

    // Check if a contact already exists
    const existinghero = await Banner.findOne({});
    if (existinghero) {
      return res
        .status(400)
        .json({ msg: "Contact already exists. Use update API." });
    }

    // If no existing contact, create a new one
    const banner = new Banner({
      heading,
      image,
    });

    const savedData = await banner.save();
    res
      .status(200)
      .json({ msg: "Banner added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getbanner = async (req, res) => {
  try {
    const productData = await Banner.findOne(); // Fetch only one contact

    if (!productData) {
      return res.status(404).json({ msg: "Banner data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatebanner = async (req, res) => {
  try {
    const { heading } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    // Update the first (and only) contact
    const updatedData = await Banner.findOneAndUpdate(
      {},
      { heading, image },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ msg: "No Hero data found to update." });
    }

    res.status(200).json({
      msg: "Data updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// APIS FOR Deals

export const createdeals = async (req, res) => {
  try {
    const imagePath = req.file ? req.file.path : null; // Get uploaded file path
    const userData = new OurDeals({
      ...req.body,
      image: imagePath,
    });

    if (!req.body.heading || !req.body.heading1 || !req.body.heading2) {
      return res.status(400).json({ msg: "Headings are required!" });
    }

    if (!userData) {
      return res.status(404).json({ msg: "data not found" });
    }

    const saveData = await userData.save();
    res.status(200).json({
      msg: "Deals created successfully",
      data: saveData,
    });
  } catch (error) {
    console.error("Error in update:", error); // Log which function caused the error
    res.status(500).json({ error: error.message });
  }
};

export const getAlldeals = async (req, res) => {
  try {
    const userData = await OurDeals.find();
    if (!userData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error in update:", error); // Log which function caused the error
    res.status(500).json({ error: error.message });
  }
};

export const getOnedeals = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await OurDeals.findById(id);
    if (!userExit) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(userExit);
  } catch (error) {
    console.error("Error in update:", error); // Log which function caused the error
    res.status(500).json({ error: error.message });
  }
};

export const updatedeals = async (req, res) => {
  try {
    const id = req.params.id;
    const { heading, heading1, heading2 } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Product.findByIdAndUpdate(
      id,
      { heading, heading1, heading2, image },
      { new: true }
    );

    res.status(200).json({
      msg: "Data updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletedeals = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await OurDeals.findById(id);
    if (!userExit) {
      return res.status(404).json({ msg: "Data not found" });
    }
    await OurDeals.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data deleted successfully" });
  } catch (error) {
    console.error("Error in update:", error); // Log which function caused the error
    res.status(500).json({ error: error.message });
  }
};

// APIs for EXOTIC FRUITS

export const createExoticfruit = async (req, res) => {
  try {
    const { heading1, image, heading2, heading3 } = req.body;

    // Check if a contact already exists
    const existingexoticfruit = await Exoticfruit.findOne({});
    if (existingexoticfruit) {
      return res
        .status(400)
        .json({ msg: "Contact already exists. Use update API." });
    }

    // If no existing contact, create a new one
    const exoticfruit = new Exoticfruit({
      heading1,
      image,
      heading2,
      heading3,
    });

    const savedData = await exoticfruit.save();
    res.status(200).json({ msg: "Fruit added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getexoticfruit = async (req, res) => {
  try {
    const productData = await Exoticfruit.findOne(); // Fetch only one contact

    if (!productData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExoticfruit = async (req, res) => {
  try {
    const { heading1, heading2, heading3 } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    // Update the first (and only) contact
    const updatedData = await Exoticfruit.findOneAndUpdate(
      {},
      { heading1, heading2, heading3, image },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ msg: "No data found to update." });
    }

    res.status(200).json({
      msg: "Data updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// API's for testimonial

export const createnewtestimonal = async (req, res) => {
  try {
    const { title, description, clientName, profession } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newTestimonial = new Testimonal({
      title,
      description,
      clientName,
      profession,
      image,
    });

    await newTestimonial.save();

    res.status(201).json({
      message: "Testimonial created successfully",
      testimonial: newTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating testimonial",
      error: error.message,
    });
  }
};

export const getalltestimonal = async (req, res) => {
  try {
    const testimonials = await Testimonal.find(); // Fetch all testimonials
    if (!testimonials.length) {
      return res.status(404).json({ msg: "No testimonials found" });
    }
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getsingletestimonal = async (req, res) => {
  try {
    const testimonial = await Testimonal.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ msg: "Testimonial not found" });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({
      msg: "Error fetching testimonial",
      error: error.message,
    });
  }
};

export const updatetestimonal = async (req, res) => {
  try {
    const { title, description, clientName, profession, image } = req.body;

    const updatedTestimonial = await Testimonal.findByIdAndUpdate(
      req.params.id,
      { title, description, clientName, profession, image },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ msg: "Testimonial not found" });
    }

    res.status(200).json({
      msg: "Testimonial updated successfully!",
      data: updatedTestimonial,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletetestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonal.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ msg: "Testimonial not found" });
    }

    await Testimonal.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// API's for shop detail REVIEW

export const createSDreview = async (req, res) => {
  try {
    const { name, email, review } = req.body;

    if (!name || !email || !review) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newReview = new ShopDReview({ name, email, review });
    const savedReview = await newReview.save();

    res
      .status(200)
      .json({ msg: "Comment posted successfully!", data: savedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSDreview = async (req, res) => {
  try {
    const productData = await ShopDReview.find({});

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteSDreview = async (req, res) => {
  try {
    const { id } = req.params;
    await ShopDReview.findByIdAndDelete(id);
    res.status(200).json({ msg: "Review deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// API's for home vegetable shop

export const createHvegetable = async (req, res) => {
  try {
    const { title, label, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Vegetableshop({
      title,
      label,
      price,
      description,
      image,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllHvegetable = async (req, res) => {
  try {
    const productData = await Vegetableshop.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOneHvegetable = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Vegetableshop.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateHvegetable = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, label, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Vegetableshop.findByIdAndUpdate(
      id,
      { title, label, price, description, image },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteHvegetable = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Vegetableshop.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Vegetableshop.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API's for CHECKOUT

export const createcheckout = async (req, res) => {
  try {
    const { fname, lname, address, city, postcode, mobile, email, notes } =
      req.body;

    if (
      !fname ||
      !lname ||
      !address ||
      !city ||
      !postcode ||
      !mobile ||
      !email ||
      !notes
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newReview = new Checkout({
      fname,
      lname,
      address,
      city,
      postcode,
      mobile,
      email,
      notes,
    });
    const savedReview = await newReview.save();

    res
      .status(200)
      .json({ msg: "Order placed successfully!", data: savedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllcheckout = async (req, res) => {
  try {
    const productData = await Checkout.find({});

    if (!productData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deletecheckout = async (req, res) => {
  try {
    const { id } = req.params;
    await Checkout.findByIdAndDelete(id);
    res.status(200).json({ msg: "Order deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// API's for shop detail REVIEW

export const createcontactform = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newReview = new ContactForm({ name, email, message });
    const savedReview = await newReview.save();

    res
      .status(200)
      .json({ msg: "Message sent successfully!", data: savedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllcontactform = async (req, res) => {
  try {
    const productData = await ContactForm.find({});

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deletecontactform = async (req, res) => {
  try {
    const { id } = req.params;
    await ContactForm.findByIdAndDelete(id);
    res.status(200).json({ msg: "Message deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// API Featured Products

export const createfeatured = async (req, res) => {
  try {
    const { productname, title, newprice, oldprice } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new FeaturedProduct({
      productname,
      title,
      image,
      newprice,
      oldprice,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Feature added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllfeatured = async (req, res) => {
  try {
    const productData = await FeaturedProduct.find();

    if (!productData) {
      return res.status(404).json({ msg: "Feature data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOnefeatured = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await FeaturedProduct.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Feature data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatefeatured = async (req, res) => {
  try {
    const id = req.params.id;
    const { productname, title, newprice, oldprice } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await FeaturedProduct.findByIdAndUpdate(
      id,
      { productname, title, image, newprice, oldprice },
      { new: true }
    );

    res.status(200).json({
      msg: "Feature updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletefeatured = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await FeaturedProduct.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await FeaturedProduct.findByIdAndDelete(id);
    res.status(200).json({ msg: "Featured Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};

// API HOME Fruit SHOP

export const createFruitHome = async (req, res) => {
  try {
    const { productname, label, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const productData = new Organic({
      productname,
      label,
      image,
      description,
      price,
    });

    const savedData = await productData.save();
    res
      .status(200)
      .json({ msg: "New Product added successfully!", data: savedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllFruitHome = async (req, res) => {
  try {
    const productData = await Organic.find();

    if (!productData) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOneFruitHome = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Organic.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product data not found" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateFruitHome = async (req, res) => {
  try {
    const id = req.params.id;
    const { productname, label, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Use new image or keep the old one

    const updatedData = await Organic.findByIdAndUpdate(
      id,
      { productname, label, image, description, price },
      { new: true }
    );

    res.status(200).json({
      msg: "Product updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteFruitHome = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Organic.findById(id);

    if (!productExist) {
      return res.status(404).json({ msg: "Product not exist" });
    }

    await Organic.findByIdAndDelete(id);
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch {
    res.status(500).json({ error: error });
  }
};