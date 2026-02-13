import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /profile test passed."});
    console.log("Get /profile test passed.");
})

route.put('/', (req: Request, res: Response) => {
    res.send({message: "Put /profile test passed."});
    console.log("Put /profile test passed.");
})

export default route;