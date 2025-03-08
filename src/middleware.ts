import {Procedure} from "./types";

export const withLogging = <I, O>(procedure: Procedure<I, O>) => {
    return (input: I) => {
        console.log("Input:", input);
        const output = procedure(input);
        console.log("Output:", output);
        return output;
    };
};