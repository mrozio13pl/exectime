import { expectAssignable, expectNotAssignable, expectType } from 'tsd';
import { execTime, execTimeSync, type Fn, type SyncFn } from './types.js';

// check types
expectType<number>(execTimeSync(() => {}));
expectType<Promise<number>>(execTime(async () => {}));
expectAssignable<Fn>(function() {});
expectAssignable<Fn>(async function() {});
expectNotAssignable<SyncFn>(Promise.resolve());