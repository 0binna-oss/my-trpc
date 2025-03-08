"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const createServer = (router) => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    for (const Key in router) {
        app.post('/api/${key}', (req, res) => {
            const procedure = router[Key];
            try {
                const output = procedure(req.body);
                res.json(output);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    return app;
};
exports.createServer = createServer;
