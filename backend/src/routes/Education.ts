import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /education test passed."});
    console.log("Get /education test passed.");
})

route.put('/', (req: Request, res: Response) => {
    res.send({message: "Put /education test passed."});
    console.log("Put /education test passed.");
})

export default route;