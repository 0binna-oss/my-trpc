export type Procedure<I, O> = (input: I) => O | Promise<O>;

export type Router = Record<string, Procedure<any, any>>;

export type InferInput<T> = T extends Procedure<infer I, any> ? I : never;

export type InferOutput<T> = T extends Procedure<any, infer O> ? O : never;