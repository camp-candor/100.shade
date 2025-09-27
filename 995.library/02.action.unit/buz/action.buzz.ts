import * as ActCns from "../../83.console.unit/console.action";

import { ActionModel } from "../action.model";
import ActionBit from "../fce/action.bit";
import State from "../../99.core/state";

import * as ActLib from '../../00.library.unit/library.action'

var lst, bit;

export const initAction = (cpy: ActionModel, bal: ActionBit, ste: State) => {
    debugger
    return cpy;
};

export const updateAction = async (cpy: ActionModel, bal: ActionBit, ste: State) => {

    var dom = bal.idx.split('.')[1]
    var file = './' + bal.src + '/' + bal.idx + '/' + dom + '.action.ts';

    var FS = require('fs-extra')

    var list = FS.readFileSync(file).toString().split('\n')

    const lines = list.filter(line => {
        const trimmedLine = line.trim();
        const startsWithExportConst = trimmedLine.startsWith('export const ');
        const containsImplements = trimmedLine.includes('implements');
        return startsWithExportConst && !containsImplements;
    });

    const output = lines.join('\n');
    var out = './995.library/act/' + dom + '.action.ts'

    FS.writeFileSync(out, output)

    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing " + out })

    bit = await ste.hunt(ActLib.LIST_LIBRARY, {})

    lst = bit.libBit.lst

    lst.forEach((a) => {

        if ( a == '995.library') return 

        var dir = FS.readdirSync('./' + a + '/act')

        var exist = false;

        dir.forEach((b) => {

            var now = b.split('.')[0]

            if (dom == now) {

                var element = a;
                var out = './' + element + '/act/' + dom + '.action.ts'
                FS.writeFileSync(out, output)
                ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing " + out })

            }
        })
    })


    bal.slv({ actBit: { idx: "update-action" } });

    return cpy;
};


