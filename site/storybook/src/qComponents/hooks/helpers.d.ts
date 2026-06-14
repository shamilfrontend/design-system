type Fn = () => void;
/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
export declare const tryOnUnmounted: (fn: Fn) => void;
export {};
