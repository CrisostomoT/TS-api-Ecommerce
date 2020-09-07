import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    transporte: Number,
    precioMayor: Number,
    precioPublico: Number,
    ganancia: Number,
    gananciaNeta: Number,
    porcentajeGanancia: Number,
});

interface ICost extends Document {
    transporte: number,
    precioMayor: number,
    precioPublico: number,
    ganancia: number,
    gananciaNeta: number,
    porcentajeGanancia: number,
};

export default model<ICost>('Cost', schema);