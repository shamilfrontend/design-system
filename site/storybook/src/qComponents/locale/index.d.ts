export type Messages = {
  [key: string]: string | string[] | Messages;
};
export declare const t: (key: string, ...args: unknown[]) => string;
export declare const setI18n: (fn: (...args: unknown[]) => string) => void;
export declare const setMessages: (messages?: Messages) => void;
