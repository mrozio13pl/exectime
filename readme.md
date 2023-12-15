# exectime [![npm](https://img.shields.io/npm/v/@mrozio/exectime?color=4CAF50&label=)](https://npm.im/@mrozio/exectime)

> Measures the time it takes to execute a function.

```sh
npm i @mrozio/exectime
```

For both synchronous and asynchronous functions:

```ts
import { execTime } from '@mrozio/exectime';

await execTime(async () => {
    // wait 1 second
    await new Promise(r => setTimeout(r, 1000));
}); // => 1002.227 (ms)
```

Specifically for synchronous functions:

```ts
import { execTimeSync } from '@mrozio/exectime';

execTimeSync(() => {
    // count to 1 billion
    for (let i = 0; i < 1e9;) i++;
}); // => 388.2297 (ms)
```

__Note__: These functions always return the execution time in milliseconds, even if the underlying measurements are in nanoseconds. This is done for consistency across different environments.

In Node.js environments, it uses [process.hrtime](https://nodejs.org/api/process.html#processhrtimebigint) for precise measurements, while in the browser, it utilizes [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now). If you want the results to be in nanoseconds, you can simply multiply them by 1 million.

## License

MIT 💖