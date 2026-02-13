import { Router, type Request, type Response } from "express";

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send({message: "Get /articles test passed."});
    console.log("Get /articles test passed.");
})

route.post('/', (req: Request, res: Response) => {
    res.send({message: "Post /articles test passed."});
    console.log("Post /articles test passed.");
})

export default route;