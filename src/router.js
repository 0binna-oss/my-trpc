"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.createRouter = exports.createProcedure = void 0;
const createProcedure = (procedure) => procedure;
exports.createProcedure = createProcedure;
const createRouter = (routes) => routes;
exports.createRouter = createRouter;
// Example router 
exports.router = (0, exports.createRouter)({
    greet: (0, exports.createProcedure)((input) => 'Hello, ${input.name}'),
    add: (0, exports.createProcedure)((input) => input.a + input.b),
});
