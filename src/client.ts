import { Router, InferInput, InferOutput } from "./types";

export const createClient = <T extends Router>(router: T) => {
    return {
        call: async <K extends keyof T>(
            key: K,
            input: InferInput<T[K]>
        ): Promise<InferOutput<T[K]>> => {
            const url = `http://localhost:3000/api/${String(key)}`;
            console.log("Fetching URL:", url);
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(input),
            });
            return response.json();
        },
    };
};