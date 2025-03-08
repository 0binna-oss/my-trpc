import express from "express";
import {Router} from "./types";

export const createServer = <T extends Router>(router: T) => {
    const app = express ();
    app.use(express.json());

    for (const Key in router) {
        app.post('/api/${key}' , (req, res) => {
            const procedure = router[Key as keyof T];
            try {
                const output = procedure(req.body);
                res.json(output);
            } catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }

    return app;
};