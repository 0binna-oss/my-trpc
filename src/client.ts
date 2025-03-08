import { Router, InferInput, InferOutput } from "./types";

export const createClient = <T extends Router>(router: T) => {
    return {
        call: async <K extends keyof T>(
            key: K,
            input: InferInput<T[K]>
        ): Promise<InferOutput<T[K]>> => {
            const response = await fetch('/api/${String(key)}', {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(input), 
            });

            return response.json();
        }
    };
};