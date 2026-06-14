type Fn = (next: () => void) => void;
export declare const createQueue: () => (fn: Fn) => void;
export {};
