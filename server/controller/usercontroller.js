import Product from "../modal/usermodel.js";
import ShopDdashboard from "../modal/dashboardmodel.js";
import Shop from "../modal/shopmodel.js";
import Cart from "../modal/cartmodel.js";
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