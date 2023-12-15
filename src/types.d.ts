export type Fn = () => any | Promise<any>;
export type SyncFn = () => Exclude<ReturnType<() => any>, Promise<any>>;

/**
 * Measures the execution time of a function, whether synchronous or asynchronous.
 * @param {Fn} fn - Function whose execution time will be measured.
 */
export declare function execTime(fn: Fn): Promise<number>;

/**
 * Measures the execution time of a synchronous function.
 * @param {SyncFn} fn - Function whose execution time will be measured.
 */
export declare function execTimeSync(fn: SyncFn): number;