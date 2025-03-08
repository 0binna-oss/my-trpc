import {Procedure, Router} from "./types";

export const createProcedure = <I, O>(procedure: Procedure<I, O>) => procedure;

export const createRouter = <T extends Router>(routes: T) => routes;

// Example router 
export const router = createRouter({
    greet: createProcedure((input: { name: string }) => 'Hello, ${input.name}'),
    add: createProcedure((input: { a: number; b: number }) => input.a + input.b),
});