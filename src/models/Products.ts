import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    name: String,
    price: Number,
    size: String,
    colors: String,
    imagePath: String,
});

interface IProduct extends Document {
    name: string;
    price: number;
    size: string;
    colors: string;
    imagePath: string;
};

export default model<IProduct>('Product', schema);