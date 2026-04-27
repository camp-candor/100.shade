import test from 'ava';
import sinon from 'sinon';
import { reducer } from '../100.shade/00.shade.unit/shade.reduce';
import * as Act from '../100.shade/00.shade.unit/shade.action';
import { ShadeModel } from '../100.shade/00.shade.unit/shade.model';

test('reducer TEST_SHADE passes execution to testShade buzzer', async (t) => {
    const slv = sinon.fake();
    const act = new Act.TestShade({ slv } as any);
    const model = new ShadeModel();

    await reducer(model, act);

    t.true(slv.calledOnce);
    t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'test-shade', dat: {} } });
});

test('reducer BUILD_SHADE passes execution to buildShade buzzer', async (t) => {
    const slv = sinon.fake();
    const act = new Act.BuildShade({ slv } as any);
    const model = new ShadeModel();

    reducer(model, act);

    t.true(slv.calledOnce);
    t.deepEqual(slv.firstCall.args[0], { shdBit: { idx: 'build-shade', dat: {} } });
});
