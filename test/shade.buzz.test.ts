import test from 'ava';
import sinon from 'sinon';
import { ShadeModel } from '../100.shade/00.shade.unit/shade.model';
import { bodyShade, testShade, buildShade } from '../100.shade/00.shade.unit/buz/shade.buzz';

test('bodyShade resolves bal.slv with body-shade and src', async (t) => {
    const slv = sinon.fake();
    const cpy = new ShadeModel();
    const bal = { slv, src: 'test-src' } as any;
    const ste = {} as any;

    bodyShade(cpy, bal, ste);

    t.true(slv.calledOnce);
    t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'body-shade', src: 'test-src' } });
});

test('testShade resolves bal.slv with test-shade', async (t) => {
    const slv = sinon.fake();
    const cpy = new ShadeModel();
    const bal = { slv } as any;
    const ste = {} as any;

    await testShade(cpy, bal, ste);

    t.true(slv.calledOnce);
    t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'test-shade', dat: {} } });
});

test('buildShade resolves bal.slv with build-shade', async (t) => {
    const slv = sinon.fake();
    const cpy = new ShadeModel();
    const bal = { slv } as any;
    const ste = {} as any;

    buildShade(cpy, bal, ste);

    t.true(slv.calledOnce);
    t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'build-shade', dat: {} } });
});
