import { Router } from 'express';
import { getProduct, getProductById, addProduct, deleteProduct } from '../controllers/product.controller';
import multer from '../libs/multer.config';

const router = Router();

router.route('/products')
    .get(getProduct)
    .post(multer.single('image'), addProduct);

router.route('/products/:id')
    .get(getProductById)
    .delete(deleteProduct);

export default router;