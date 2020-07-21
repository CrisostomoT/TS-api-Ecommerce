import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    name: String,
    price: Number,
    size: String,
    colors: String
});

interface IProduct extends Document {
    name: String;
    price: Number;
    size: String; 
    colors:String;
};

export default model<IProduct>('Product', schema);