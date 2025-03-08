"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLogging = void 0;
const withLogging = (procedure) => {
    return (input) => {
        console.log("Input:", input);
        const output = procedure(input);
        console.log("Output:", output);
        return output;
    };
};
exports.withLogging = withLogging;
