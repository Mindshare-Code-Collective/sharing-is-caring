import Product from "../models/productModel.js";
import User from "../models/userModel.js";
//import { v2 as cloudinary } from 'cloudinary';
//import fs from 'fs';

const createProduct = async (req, res) => {

  /*  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'fotoFriend',
    }
  ); */

  try {
      const newProduct = new Product();

      newProduct.name = req.body.name;
      newProduct.category = req.body.category;
      newProduct.trade = req.body.trade;
      newProduct.condition = req.body.condition;
      newProduct.shipment = req.body.shipment;
      newProduct.description = req.body.description;
      newProduct.picture = req.body.picture;
      newProduct.contact = req.body.contact;
      newProduct.user = req.body.user;
      
      await newProduct.save();
      res.status(200).json({ success: true, data: newProduct});
      // foto friend
      /* user: res.locals.user._id,
      url: result.secure_url,
      image_id: result.public_id, */
    }

  //fs.unlinkSync(req.files.image.tempFilePath); // yüklenen temp dosyasini kaldirmasini istiyorum...
    
  
   catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ uploadedAt: -1 }).limit(15);
    res.status(200).json({success:true, data: products})
    }
   catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// const getUserProducts = async (req, res) => {
//   try {
//     const products = res.locals.user
//       ? await Product.find({ user: { $ne: res.locals.user._id } })
//       : await Product.find({});
//     res.status(200).render('products', {
//       products,
//       link: 'products',
//     });
//   } catch (error) {
//     res.status(500).json({
//       succeded: false,
//       error,
//     });
//   }
// };

const getAProduct = async (req, res) => {
  try {
   const product = await Product.findById({ _id: req.params.id }).populate({ path: 'user', select: '_id' });
   /* let isOwner = false;
   if (res.locals.user) {
     isOwner = product.user.equals(res.locals.user._id);
   } */
    res.status(200).json({ success: true, data: product});
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const deleteProduct = async (req, res) => {
  /* console.log(req.params.id); */
  try {
    const product = await Product.findById(req.params.id);
    /* const productId = product.image_id;
    await cloudinary.uploader.destroy(productId); */
    await Product.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ success: true, data: product, message: "Product deleted."});
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
    /* if (req.files) {
      const productId = product.image_id;
      await cloudinary.uploader.destroy(productId);
      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: 'fotoFriend',
        }
      );
      product.url = result.secure_url;
      product.image_id = result.public_id;
      fs.unlinkSync(req.files.image.tempFilePath);
    } */
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

export { createProduct, getAllProducts, getAProduct, deleteProduct, updateProduct };
