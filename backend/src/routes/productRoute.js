import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getAllProducts);

router.route("/:id").get(productController.getAProduct);
router.route("/:id").delete(productController.deleteProduct);
router.route("/:id").patch(productController.updateProduct);

export default router;
