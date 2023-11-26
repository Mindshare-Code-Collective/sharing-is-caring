import Product from "../models/productModel.js";
import User from "../models/userModel.js";


const createProduct = async (req, res) => {
  
  try {
      const newProduct = new Product();
      const user = await User.findById(req.body.user);

      newProduct.name = req.body.name;
      newProduct.category = req.body.category;
      newProduct.trade = req.body.trade;
      newProduct.condition = req.body.condition;
      newProduct.shipment = req.body.shipment;
      newProduct.description = req.body.description;
      newProduct.picture = req.body.picture;
      newProduct.user = user;
      newProduct.status = "online",
      
      await newProduct.save();
      res.status(200).json({ success: true, data: newProduct});  
    }

   catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.find().sort({ uploadedAt: -1 }).limit(15);
    const products = await Product.find().populate(['user'])

    res.status(200).json({success:true, data: products})
    }
   catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};


const getAProduct = async (req, res) => {
  try {
   const product = await Product.findById({ _id: req.params.id }).populate({ path: 'user', select: '_id' });

    res.status(200).json({ success: true, data: product});
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const deleteProduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);

    product.status = "deleted",
      
    await product.save();
    res.status(200).json({ success: true, data: product, message: "Product deleted."});
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const reserveProduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);

    product.status = "reserved",
      
    await product.save();
    res.status(200).json({ success: true, data: product, message: "Product reserved."});
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const onlineProduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);

    product.status = "online",
      
    await product.save();
    res.status(200).json({ success: true, data: product, message: "Product is online."});
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
  
    product.name = req.body.name;
    product.category = req.body.category;
    product.trade = req.body.trade;
    product.condition = req.body.condition;
    product.shipment = req.body.shipment;
    product.description = req.body.description;
    product.picture = req.body.picture;
    product.contact = req.body.contact; 
    
    product.save();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export { createProduct, getAllProducts, getAProduct, deleteProduct, reserveProduct, onlineProduct, updateProduct };

