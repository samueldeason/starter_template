import * as express from "express";

const router = express.Router();

router.get(
    "/api/hello",
    (req: any, res: any, next: any) => {
        res.json("World");
    }
)

export default router;