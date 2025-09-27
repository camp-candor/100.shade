import * as ActCns from "../../83.console.unit/console.action";

import { UnitModel } from "../unit.model";
import UnitBit from "../fce/unit.bit";
import State from "../../99.core/state";

export const initUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {
    debugger
    return cpy;
};

export const createUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

    if (bal.idx == null) bal.idx = "alligator";

    var FS = require("fs-extra");
    var doT = require("dot");
    var S = require("string");

    var title = '00.' + bal.idx;

    var loc = "./data/redux/00.sim.unit/";

    //cpy effect redux data in project data
    FS.copySync("./data/00.sim.unit", "./data/redux/00.sim.unit");

    var num = title.split(".")[0];
    var nom = title.split(".")[1];

    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "nom " + nom })

    var file = loc;
    var list = FS.readdirSync(file);

    var out = [];
    list.forEach((a, b) => {
        list[b] = file + "/" + a;

        if (FS.lstatSync(list[b]).isDirectory()) {
            var directory = list[b];
            var listB = FS.readdirSync(directory);
            listB.forEach((c) => out.push(directory + "/" + c));
        } else {
            out.push(list[b]);
        }
    });

    if (nom == null) nom = "beeing";

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var gel = {
        idx: "together000",
        title: capitalizeFirstLetter(nom),
        nom: nom,

        wakeActionKey: nom.toUpperCase() + "_OPEN",
        initActionKey: "INIT_" + nom.toUpperCase(),
        updateActionKey: "UPDATE_" + nom.toUpperCase(),

        wakeActionFunction: capitalizeFirstLetter(nom),
        initActionFunction: "Init" + capitalizeFirstLetter(nom),
        updateActionFunction: "Update" + capitalizeFirstLetter(nom),

        bitNom: nom + "Bit",
        bitTitle: capitalizeFirstLetter(nom) + "Bit",
        actionLabel: capitalizeFirstLetter(nom),

        actionTitle: "Waking " + capitalizeFirstLetter(nom),
        initTitle: "Init " + capitalizeFirstLetter(nom),
        updateTitle: "Update " + capitalizeFirstLetter(nom),
    };

    out.forEach((a) => {
        var neo = a.replace("sim", gel.nom);
        neo = neo.replace(".sim", "." + gel.nom);

        //console.log("neo " + neo);

        var lineList = FS.readFileSync(a).toString().split("\n");

        lineList.forEach((a, b) => {
            //console.log("line " + a);
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            lineList[b] = outLine;
        });

        lineList.forEach((a) => {
            //console.log("line : " + a);
        });

        var finFin = neo.replace("sim", gel.nom);
        //console.log("what you got for a fin fin " + finFin);

        finFin = finFin.replace("../data/redux/", "../data/redux/unit/");

        finFin = finFin.replace("00", num);

        finFin = finFin.replace(".txt", ".ts");

        var finFile = lineList.join("\n");

        FS.ensureFileSync(finFin);
        FS.writeFileSync(finFin, finFile);

        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing " + finFin })

    });

    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ untBit: { idx: "create-unit", dat: { idx: bal.idx } } });
    }, 2111);



    return cpy;


};

export const testUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {
    debugger
    return cpy;
};

export const updateUnit = async (cpy: UnitModel, bal: UnitBit, ste: State) => {

    var FS = require('fs-extra')

    var bit;
    var root = bal.idx.split('.')[1];
    var rootUpper = root.charAt(0).toUpperCase() + root.slice(1);
    var nom = bal.dat;
    var nomUpper = nom.charAt(0).toUpperCase() + nom.slice(1);

    var buzzFile = './' + bal.src + '/' + bal.idx + '/buz/' + root + '.buzz.ts';
    var buzzerFile = './' + bal.src + '/' + bal.idx + '/' + root + '.buzzer.ts';
    var actionFile = './' + bal.src + '/' + bal.idx + '/' + root + '.action.ts';
    var reduceFile = './' + bal.src + '/' + bal.idx + '/' + root + '.reduce.ts';

    var existBuzz = FS.existsSync(buzzFile);
    var existBuzzer = FS.existsSync(buzzerFile);
    var existAction = FS.existsSync(actionFile);
    var existReduce = FS.existsSync(reduceFile);
    if (existBuzz == false || existAction == false || existReduce == false || existBuzzer == false) {
        if (bal.slv != null)
            bal.slv({ untBit: { idx: "update-unit-error", src: 'no exist on source file' } });
        return;
    }
    var listBuzz = FS.readFileSync(buzzFile).toString().split('\n');
    var listBuzzer = FS.readFileSync(buzzerFile).toString().split('\n');
    var listAction = FS.readFileSync(actionFile).toString().split('\n');
    var listReduce = FS.readFileSync(reduceFile).toString().split('\n');
    var doT = require("dot");
    const updateBuzz = (lst) => {
        var hold = [];
        var out = [];
        lst.forEach((a, b) => {
            if (a.includes('import'))
                hold.push(b);
        });
        var dex = 0;
        hold = hold.reverse();
        var flag = false;
        hold.forEach((a, b) => {
            if (flag == true)
                return;
            var now = a - 1;
            var nxt = hold[b + 1];
            if (nxt == now) {
                dex = nxt;
            }
            else
                flag = true;
        });
        var buzNom = nom + rootUpper;
        var cpyNom = rootUpper + 'Model';
        var balNom = rootUpper + "Bit";
        var lineList = cpy.buzzTemplate.toString().split("\n");
        var gel = { buzNom, cpyNom, balNom };
        lineList.forEach((a, b) => {
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            out.push(outLine);
        });
        return { lst: out, val: dex };
    };
    const updateActionUpper = (lst) => {
        var out = [];
        var dex = 0;
        lst.forEach((a, b) => {
            if (a.includes('export type Actions') == true)
                dex = b;
        });
        var actUpr = nom + '_' + rootUpper;
        actUpr = actUpr.toUpperCase();
        var actMsg = '[' + nomUpper + ' action] ' + nomUpper + ' ' + rootUpper;
        var actTle = nomUpper + rootUpper;
        var bitNom = rootUpper + "Bit";
        var lineList = cpy.actTemplate.toString().split("\n");
        var gel = { actUpr, actMsg, actTle, bitNom };
        lineList.forEach((a, b) => {
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            out.push(outLine);
        });
        return { lst: out, val: dex };
    };
    const updateActionLower = (lst) => {
        var out = [];
        var dex = 0;
        lst.forEach((a, b) => {
            if (a.includes('export type Actions =') == true)
                dex = b;
        });
        var actTle = nomUpper + rootUpper;
        var lineList = cpy.actTemplateLower.toString().split("\n");
        var gel = { actTle };
        lineList.forEach((a, b) => {
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            out.push(outLine);
        });
        return { lst: out, val: dex };
    };
    const updateReduce = (lst) => {
        var out = [];
        var dex = 0;
        lst.forEach((a, b) => {
            if (a.includes('default') == true)
                dex = b;
        });
        var actUpr = nom + '_' + rootUpper;
        actUpr = actUpr.toUpperCase();
        var actTle = nom + rootUpper;
        var lineList = cpy.reduceTemplate.toString().split("\n");
        var gel = { actUpr, actTle };
        lineList.forEach((a, b) => {
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            out.push(outLine);
        });
        return { lst: out, val: dex };
    };
    const updateBuzzer = (lst) => {
        var out = [];
        var actTle = nom + rootUpper;
        var lineList = cpy.buzzerTemplate.toString().split("\n");
        var gel = { actTle, root };
        lineList.forEach((a, b) => {
            var doTCompiled = doT.template(a);
            var outLine = doTCompiled(gel);
            lst.push(outLine);
        });
        return { lst };
    };
    var buzzBit = updateBuzz(listBuzz);
    var buzzerBit = updateBuzzer(listBuzzer);
    var actionUpperBit = updateActionUpper(listAction);
    var actionLowerBit = updateActionLower(listAction);
    var reduceBit = updateReduce(listReduce);
    // merge 'b' with 'a' at index 'i'
    const merge = (a, b, i = 0) => {
        return a.slice(0, i).concat(b, a.slice(i));
    };
    var resultBuzz = merge(listBuzz, buzzBit.lst, buzzBit.val);
    var resultBuzzer = buzzerBit.lst.filter((e) => { return e.length > 2; });
    var resultReduce = merge(listReduce, reduceBit.lst, reduceBit.val);
    var resultActionUpper = merge(listAction, actionUpperBit.lst, actionUpperBit.val);
    var upperActionDex = updateActionUpper(resultActionUpper).val;
    var lowerDex = actionLowerBit.val;
    var lowerActionList = listAction.slice(lowerDex, listAction.length);
    lowerActionList.forEach((a, b) => {
        lowerActionList[b] = a.replace(';', '');
    });
    lowerActionList = lowerActionList.filter((e) => {
        if (e.length >= 2)
            return e;
    });
    lowerActionList.push('| ' + nomUpper + rootUpper);
    lowerActionList.unshift(' ');
    resultActionUpper = resultActionUpper.slice(0, upperActionDex);
    var resultAction = resultActionUpper.concat(lowerActionList);
    bit = await FS.writeFile(buzzFile, resultBuzz.join('\n'));

    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'writing...' + buzzFile })
    bit = await FS.writeFile(buzzerFile, resultBuzzer.join('\n'));

    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'writing...' + buzzerFile })
    bit = await FS.writeFile(reduceFile, resultReduce.join('\n'));
    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'writing...' + reduceFile })

    bit = await FS.writeFile(actionFile, resultAction.join('\n'));
    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'writing...' + actionFile })

    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ untBit: { idx: "update-unit", dat: bal } });
    }, 2111);


    return cpy;
};

export const listUnit = (cpy: UnitModel, bal: UnitBit, ste: State) => {

    var path = './' + bal.src;

    var FS = require('fs-extra')
    var option = FS.pathExistsSync(path)

    lst = []

    if (option == true) {
        var list = FS.readdirSync('./' + bal.src);
        var lst = list.filter((e) => { return e.includes('.unit') == true; });
        bal.slv({ untBit: { idx: "list-unit", lst, val: 1 } });
        return cpy;
    }

    bal.slv({ untBit: { idx: "list-unit", lst, val: 0 } });

    return cpy;
};


