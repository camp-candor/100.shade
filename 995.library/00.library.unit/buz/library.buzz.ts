
import { LibraryModel } from "../library.model";
import LibraryBit from "../fce/library.bit";
import State from "../../99.core/state";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActCns from "../../83.console.unit/console.action";



import * as ActLib from "../library.action";


import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";


var bit, val, idx, dex, lst, dat;

var exec = require('child_process').exec;

export const initLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    global.CONTROL = null
    global.TIME = null
    global.SPACE = null
    global.SHADE = null
    global.SOLID = null
    global.PIXEL = null

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLib ] , dat: bal.dat, src: bal.src })
    
    //setInterval( async ()=>{

    //    ste.bus("[Open action] Open Pixel", {})

    //}, 4444 )

    //if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-control" } });

    return cpy;
};

export const devLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {


    const { spawn } = require('child_process');
    const path = require('path');

    var batch;

    async function launchBatchFile(userInputPath) {
        const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

        batch = spawn('cmd', ['/c', sanitizedPath]);

        batch.stdout.on('data', async (data) => {
            bit = await ste.hunt(ActMnu.PRINT_MENU, { src: `stdout: ${data}` });
            //console.log(`stdout: ${data}`);
        });

        batch.stderr.on('data', async (data) => {
            bit = await ste.hunt(ActMnu.PRINT_MENU, { src: `stdout: ${data}` });
            //console.error(`stderr: ${data}`);
        });

        batch.on('close', async (code) => {
            //console.log(`child process exited with code ${code}`);

            //FS.emptyDir( dest, ()=>{
            //  FS.copySync('./dist/win-unpacked/' , dest )
            //})

            //console.log("application complete ")

            bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "application complete " });

        });


        bit = await ste.hunt(ActMnu.PRINT_MENU, { src: 'Batch file launched!' });


    }



    const process = require('process');


    //launchBatchFile(process.env.WRANGLER_BAT);
    //launchBatchFile(process.env.OPEN_BAT);

    //process.cwd('../001.alligator.quest/')
    
    
    
    launchBatchFile(process.env.OPEN_BAT);
    

    exec('wrangler pages dev dist', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "--" + stdout })
    })

    bal.slv({ libBit: { idx: "dev-library", val: 0 } });
    return cpy;
};

export const listLibrary = (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var FS = require('fs-extra')
    var list = FS.readdirSync('./')

    const pattern = /^\d{3}\.[a-zA-Z]+$/;
    const newArray = list.filter(item => pattern.test(item));

    bal.slv({ libBit: { idx: "list-library", lst: newArray } });
    return cpy;
};


export const setupSpectrum = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    console.log('testing the library')

    bal.slv({ libBit: { idx: "test-library" } });
    return cpy;
};

export const testLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "testing the library" })

    bal.slv({ libBit: { idx: "test-library" } });
    return cpy;
};

export const updateLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var FS = require("fs-extra");
    var doT = require("dot");
    var S = require("string");

    var title = "995.library";
    var file = "./data/redux/BEE.txt";
    var fileFin = "./data/redux/BEE.ts";

    title = bal.src

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var list = FS.readdirSync("./" + title);
    var lineList = FS.readFileSync(file).toString().split("\n");

    var out = [];
    var dirList = [];

    var itemList = [];

    list.forEach(async (a, b) => {
        list[b] = "./" + title + "/" + a;

        if (FS.lstatSync(list[b]).isDirectory()) {
            if (S(list[b]).contains("unit") == false) return;

            var directory = list[b] + "/";
            var element = a.split(".")[1];



            var unitName = capitalizeFirstLetter(element);

            var unitImportSrc = "./" + a + "/" + element + ".unit";
            var unitImportSte = "import " + unitName + 'Unit from "' + unitImportSrc + '";';

            var faceImportSrc = "./" + a + "/fce/" + element + ".interface";
            var faceImportSte = "import " + unitName + ' from "' + faceImportSrc + '";';

            var modlImportSrc = "./" + a + "/" + element + ".model";
            var modlImportSte = "import { " + unitName + 'Model } from "' + modlImportSrc + '";';

            var redcImportSrc = "./" + a + "/" + element + ".reduce";
            var redcImportSte = "import * as reduceFrom" + unitName + ' from "' + redcImportSrc + '";';

            var reduced = element + " : reduceFrom" + unitName + ".reducer";
            var model = element + " : " + unitName + " = new " + unitName + "Model();";

            var item = {
                model,
                reduced,
                redcI: redcImportSte,
                modlI: modlImportSte,
                facI: faceImportSte,
                untI: unitImportSte,
                unitName,
                element,
            };

            itemList.push(item);
        }
    });

    var unitImports = "";
    itemList.forEach((a) => {
        unitImports += a.untI + "\n";
    });

    var faceImports = "";
    itemList.forEach((a) => {
        faceImports += a.facI + "\n";
        faceImports += a.modlI + "\n";
    });

    var unitListNom = [];
    itemList.forEach((a) => {
        unitListNom.push(a.unitName + "Unit");
    });

    var unitList = JSON.stringify(unitListNom) + ";";
    unitList = S(unitList).replaceAll('"', "");

    var reduceImports = "";
    itemList.forEach((a) => {
        reduceImports += a.redcI + "\n";
    });

    var reduceList = "";
    itemList.forEach((a, b) => {
        //if (b == reduceList.length - 1) return;
        reduceList += a.reduced + ", \n";
    });

    //reduceList += itemList[itemList.length - 1].reduced + "\n";

    var modelList = "";
    itemList.forEach((a, b) => {
        modelList += a.model + "\n";
    });

    var gel = {
        unitImports,
        faceImports,
        unitList,
        reduceImports,
        reduceList,
        modelList,
    };

    var writeLine = [];

    lineList.forEach(async (a, b) => {


        if (S(a).contains("//")) return;

        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);

        writeLine.push(outLine);
    });

    writeLine.forEach(async (a) => {
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "line : " + a })
    });

    var finFile = writeLine.join("\n");

    FS.ensureFileSync(fileFin);

    var endLoc = "./" + title + "/BEE.ts";


    finFile


    FS.writeFileSync(endLoc, finFile);

    bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing " + endLoc })


    bal.slv({ libBit: { idx: "update-library" } });
    return cpy;
};

export const countLibrary = async (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var Walk = require("@root/walk");
    var path = require("path");
    var FS = require('fs-extra')

    var output = []

    var direct = {}
    var snowflake = {}

    function walkFunc(err, pathname, dirent) {
        if (err) {
            // throw an error to stop walking
            // (or return to ignore and keep going)
            console.warn("fs stat error for %s: %s", pathname, err.message);
            return Promise.resolve();
        }

        if (dirent.isDirectory() && dirent.name == 'data') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'dist') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'node_modules') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'public') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == 'modules') { return Promise.resolve(false) }
        if (dirent.isDirectory() && dirent.name == '.') { return Promise.resolve(false) }


        if (dirent.isDirectory() && dirent.name.startsWith(".")) {
            return Promise.resolve(false);
        }

        if (dirent.isFile() && dirent.name.startsWith(".") == false) {
            var file = path.join(path.dirname(pathname), dirent.name);
            output.push(file)

            if (direct[path.dirname(pathname)] == null) direct[path.dirname(pathname)] = ''
        }

        return Promise.resolve();
    }

    await Walk.walk('./', walkFunc);

    output

    const allowedExtensions = new Set(['.ts', '.js', '.mjs', '.cjs', '.tsx', '.jsx', '.css']);

    const paths = output.filter(filePath => {
        const extension = path.extname(filePath).toLowerCase(); // Ensure case-insensitivity for extension
        return allowedExtensions.has(extension);
    });

    paths


    var out = []

    paths.forEach((a) => {
        var lst = FS.readFileSync(a).toString().split('\n');
        out = out.concat(lst)
    })

    var score = []

    out.forEach((a) => {
        if (a.length < 5) return
        a = a.replaceAll(' ', '')
        if (a.length <= 3) return
        if (a.includes('//')) return
        //if (a.includes('console.log')) return
        if (a.includes('returncpy')) return
        score.push(a)
        if (snowflake[a] == null) snowflake[a] = 1
    })

    direct
    score

    var fin = score.length

    FS.writeFileSync('./data/complete.txt', out.join('\n'))

    const { DateTime } = require("luxon");
    const dt = DateTime.local();
    var now = dt.toLocaleString(DateTime.DATETIME_FULL);
    var S = require('string')
    now = now.replace(':', '-')
    now = S(now).slugify().s;

    var pow = 0;

    for (var key in snowflake) {
        pow += 1;
    }

    var percent = fin / 300000 * 100;


    var line0 = fin + ' : ' + pow + ' : ' + now;
    var line1 = percent.toFixed(3) + '% of 300,000 lines of code to go'

    var list = FS.readFileSync('./data/line-log.txt').toString().split('\n')

    var past = list[0];
    var last = Number(past.split(':')[0])

    if (last != fin) {
        list.unshift(line1)
        list.unshift(line0)
        list
        FS.writeFileSync('./data/line-log.txt', list.join('\n'))

        const fileToOpen = './data/line-log.txt'; // Replace with your file path

        try {
            //console.log(`Attempting to open ${fileToOpen}...`);
            const output = await openFileInVSCode(fileToOpen);
            //console.log(`Successfully attempted to open ${fileToOpen} in VS Code.`);
            if (output) {
                // console.log(`VS Code STDOUT: ${output}`);
            }
            // If you resolved with { stdout, stderr }:
            // if (output.stdout) console.log(`VS Code STDOUT: ${output.stdout}`);
            // if (output.stderr) console.warn(`VS Code STDERR: ${output.stderr}`);

        } catch (error) {
            //console.error(`Operation failed: ${error.message}`);
            //if (error.hint) {
            //    console.error(`Hint: ${error.hint}`);
            // }
            if (error.stderr) { // stderr attached to our custom error
                // console.error(`STDERR content during failure: ${error.stderr}`);
            }
            // console.error("Full error object:", error);
        }

    }

    bal.slv({ libBit: { idx: "count-library", val: fin } });
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

function openFileInVSCode(filePath) {

    const { exec } = require('child_process');
    const path = require('path');

    return new Promise((resolve, reject) => {
        const absoluteFilePath = path.resolve(filePath);
        const vscodeCommand = process.platform === 'win32' ? 'code.cmd' : 'code';
        const command = `${vscodeCommand} "${absoluteFilePath}"`;

        //console.log(`Executing: ${command}`);

        exec(command, (error, stdout, stderr) => {
            if (error) {
                // Construct a more informative error object
                const errDetails = new Error(`Error opening file with VS Code: ${error.message}`);
                // errDetails.originalError = error; // Optionally attach original error
                //errDetails.stdout = stdout;
                //errDetails.stderr = stderr; // stderr from exec might be useful even on error

                //if (error.message.includes('not found') || error.message.includes('is not recognized')) {
                //  errDetails.hint = "Ensure 'code' (or 'code.cmd' on Windows) is in your system's PATH. " +
                "Run 'Shell Command: Install \"code\" command in PATH' from VS Code's command palette.";
                // }
                reject(errDetails);
                return;
            }

            // Even on success, VS Code might output to stderr (e.g., warnings)
            // We can pass stdout and stderr along for the caller to inspect.
            // For simplicity, just resolving with stdout here.
            // Or resolve({ stdout, stderr }) if both are needed.
            resolve(stdout); // Or resolve({ stdout, stderr })
        });
    });
}



export const astroLibrary = (cpy: LibraryModel, bal: LibraryBit, ste: State) => {

    var FS = require('fs-extra')

    var list = FS.readdirSync('./public/process/txt');


    list.forEach((a, b) => {

        var idx = String(b).padStart(4, '0');

        var now = a.split('.')
        now.pop()
        now = now.join('.')

        const size = 3;
        var source = FS.readFileSync('./public/process/txt/' + a).toString().split('\n')

        source.unshift('---')
        source.unshift('description: A reference page in my new Starlight docs site.')
        source.unshift('title: ' + idx + '.' + now + 'title')
        source.unshift('---')

        var cohere = source.join('\n')

        FS.writeFileSync('./public/process/md/' + idx + '.' + now + '.md', cohere)

    })


    bal.slv({ libBit: { idx: "astro-library", val: 1 } });
    return cpy;
};

export const questLibrary = (cpy: LibraryModel, bal: LibraryBit, ste: State) => {
    debugger
    return cpy;
};