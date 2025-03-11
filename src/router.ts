import {Procedure, Router} from "./types";
import { withLogging } from "./middleware";

export const createProcedure = <I, O>(procedure: Procedure<I, O>) => procedure;

export const createRouter = <T extends Router>(routes: T) => routes;

// Example router 
export const router = createRouter({
    greet: createProcedure((input: { name: string }) => 'Hello, ${input.name}'),
    add: createProcedure((input: { a: number; b: number }) => input.a + input.b),
    subtract: createProcedure((input: {a: number; b: number }) => input.a - input.b),
    multiply: createProcedure((input: {a: number; b: number }) => input.a * input.b), 
});

export const routerWithLogging = createRouter({
    greet: withLogging((input: {name: string}) => `Hello, ${input.name}`),
    add: withLogging((input: {a: number; b: number}) => input.a + input.b),
});