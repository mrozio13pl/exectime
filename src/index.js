/** Is running in Node? */
function isNode() {
    return (
        typeof process !== 'undefined' &&
        process.type !== 'renderer' &&
        process.versions !== undefined &&
        process.versions.node !== undefined
    );
}

/**
 * Convert time to milliseconds
 * @param {number} time final time
 * @private
 */
function convertTime(time) {
    return isNode() ? Number(time) / 1e6 : time;
}

/**
 * Get time by either using `process.hrtime` if running Nodejs or `performance.now()` if in the browser.
 * @private
 */
function getTime() {
    return isNode() ? process.hrtime.bigint() : performance.now();
}

/**
 * Measures the execution time of a function, whether synchronous or asynchronous.
 * @param {Function} fn - Function whose execution time will be measured.
 */
async function execTime(fn) {
    // start time
    const startTime = getTime();

    // execute given function
    await Promise.resolve(fn());

    // end time
    const endTime = getTime();

    // final time
    return convertTime(endTime - startTime);
}

/**
 * Measures the execution time of a synchronous function.
 * @param {Function} fn - Function whose execution time will be measured.
 */
function execTimeSync(fn) {
    // start time
    const startTime = getTime();

    // execute given synchronius function
    fn();

    // end time
    const endTime = getTime();

    // final time
    return convertTime(endTime - startTime);
}

export { execTime, execTimeSync };