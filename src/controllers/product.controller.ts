import { Request, Response } from 'express';
import Product from '../models/Products';
import fs from 'fs';

export const getProduct = async (req: Request, res: Response): Promise<Response> => {
    const products = await Product.find();
    return res.json(products);
};

export const getProductById = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.json(product);
};

export const addProduct = async (req: Request, res: Response): Promise<Response> => {
    const { name, price, size, colors } = req.body;
    const imagePath = req.file.path;
    const newProduct = {
        name: name,
        price: price,
        size: size,
        colors: colors,
        imagePath: imagePath
    };
    const product = new Product(newProduct);
    await product.save();

    return res.json({
        message: "Product succesfully saved",
        product
    });
};

export async function deleteProduct (req: Request, res: Response): Promise<Response> {
    let id = req.params.id;
    await Product.findByIdAndDelete(id);
    fs.unlink(req.file.path, (err) => {
        if (err) throw err;
        return res.json({
            message: `${req.file.path} succesfully removed`
        });
    });
    if (!req.file.path) {
        return res.json({
            message: "No picture found"
        })
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    const { name, price, size, colors } = req.body;
    const oldProduct = {
        newName: name,
        newPrice: price,
        newSize: size,
        newColors: colors
    };
    const updatedProduct = await Product.findByIdAndUpdate(id, oldProduct);
    return res.json(updateProduct)
};