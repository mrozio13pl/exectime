import { execTime, execTimeSync } from '../index.js';

QUnit.module('execution time');

QUnit.test('run async fn', async assert => {
    const res = await execTime(async () => {
        await new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    });

    console.log(res);
    assert.equal(typeof res, 'number');
    assert.true(res > 0);
});

QUnit.test('run sync fn', assert => {
    const res = execTimeSync(() => {
        for (let i = 0; i < 1_000_000_000;) {
            // some synchronous operation
            i++;
        }
    });

    console.log(res);
    assert.equal(typeof res, 'number');
    assert.true(res > 0);
});
