import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /projects test passed."});
    console.log("Get /projects test passed.");
})

route.put('/', (req: Request, res: Response) => {
    res.send({message: "Put /projects test passed."});
    console.log("Put /projects test passed.");
})

export default route;