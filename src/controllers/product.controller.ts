import { Request, Response } from 'express';

export const getProduct = (req: Request, res: Response): Response => {
    return res.json({
        message: "Hello world"
    })
}