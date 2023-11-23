import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getAllProducts);

router.route("/:id").get(productController.getAProduct);
router.route("/delete/:id").patch(productController.deleteProduct);
router.route("/reserve/:id").patch(productController.reserveProduct);
router.route("/online/:id").patch(productController.onlineProduct);
router.route("/:id").patch(productController.updateProduct);

export default router;
