import { Request, Response } from 'express';
import Cost from '../models/Costs';

export const getCost = async (req: Request, res: Response): Promise<Response> => {
    const cost = await Cost.find();
    return res.json(cost);
};

export const addCost = async (req: Request, res: Response): Promise<Response> => {
    const { transporte, precioMayor, precioPublico, ganancia, gananciaNeta, porcentajeGanancia } = req.body;
    const newCost = {
        transporte: transporte,
        precioMayor: precioMayor,
        precioPublico: precioPublico,
        ganancia: ganancia,
        gananciaNeta: gananciaNeta,
        porcentajeGanancia: porcentajeGanancia
    };
    const cost = new Cost(newCost);
    await cost.save();

    return res.json({
        message: "Costo agregado exitosamente",
        cost
    });
};

export const deleteCost = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;
    const deletedCost = await Cost.findByIdAndDelete(id);
    if (deletedCost) {
        return res.json({
            message: "Costo borrado"
        });
    } else {
        return res.json({
            message: "Costo no encontrado"
        });
    }
};