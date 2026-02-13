import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /certifications test passed."});
    console.log("Get /certifications test passed.");
})

route.put('/', (req: Request, res: Response) => {
    res.send({message: "Put /certifications test passed."});
    console.log("Put /certifications test passed.");
})

export default route;