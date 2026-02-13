import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /testimonials test passed."});
    console.log("Get /testimonials test passed.");
})

route.put('/', (req: Request, res: Response) => {
    res.send({message: "Put /testimonials test passed."});
    console.log("Put /testimonials test passed.");
})

export default route;