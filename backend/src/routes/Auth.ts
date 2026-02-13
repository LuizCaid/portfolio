import { Router, type Request, type Response } from "express";
import express from 'express';

const route = Router();

route.post('/login', (req: Request, res: Response) => {
    res.send({message: "Post /auth/login test passed."});
    console.log("Post /auth/login test passed.");
})

export default route;