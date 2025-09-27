require('dotenv').config();
const { spawn } = require('child_process');
const MQTT = require('async-mqtt');
const path = require('path');
const fs = require('fs');
const { program } = require('commander');

const PORT = 1995;
const wsPort = 8995;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];


const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
    console.log('Aedes MQTT-WS listening on port: ' + wsPort)
    aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(PORT, async () => {
    console.log('server started and listening on port ', PORT);

    var exec = require('child_process').exec;

    exec('tsc -b 995.library', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        init(PORT);
    })
});


const init = async (prt) => {

    console.log("inits")

    const local = 'ws://localhost:80';
    //const local = 'wss://agent-network-8af0ee89ad26.herokuapp.com';

    const localBit = { idx: 'local', src: local };

    const { JSDOM } = require('jsdom');

    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
        url: 'http://localhost', // Provide a URL for features like location.href
    });

    // Attach the jsdom window to the Node.js global object
    global.window = dom.window;

    LIBRARY = require(path.resolve('./dist/995.library/hunt'));
    LIBRARY_ACTION = require(path.resolve('./dist/995.library/00.library.unit/library.action'));
    await LIBRARY.hunt(LIBRARY_ACTION.INIT_LIBRARY, { val: 1, dat: null, src: null });

    //await LIBRARY.hunt(LIBRARY_ACTION.INIT_LIBRARY, { val: 1, dat: MQTT, src: [localBit] });

    //LIBRARY = require(path.resolve('./dist/995.library/hunt'));
    //LIBRARY_ACTION = require(path.resolve('./dist/995.library/00.library.unit/library.action'));

    //SPACE = require(path.resolve('./002.space/index'));
    //SPACE_ACTION = require(path.resolve('./002.space/00.space.unit/space.action'));

    //PIVOT = require(path.resolve('./999.pivot/index'));
    //PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));

    //if (pvt == false) {
     //   await PIVOT.hunt(PIVOT_ACTION.INIT_PIVOT, { dat: MQTT, src: local });
        //await SPACE.hunt( SPACE_ACTION.INIT_SPACE, {  dat: MQTT, src: local });
    //    await LIBRARY.hunt(LIBRARY_ACTION.INIT_LIBRARY, { val: 1, dat: MQTT, src: [localBit] });

   // }
   // else {

   //     await PIVOT.hunt(PIVOT_ACTION.INIT_PIVOT, { val: 1, dat: MQTT, src: local });
        //await SHADE.hunt( SHADE_ACTION.INIT_SHADE , { val: 1, dat: MQTT, src:  [localBit]  });
   // }

};





//var exec = require('child_process').exec;

//exec('tsc -b 995.library', async (err, stdout, stderr) => {
//    if (err) {
//        console.error(`exec error: ${err}`);
//    }

//    init()
//})


function launchBatchFile(userInputPath) {
    const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

    batch = spawn('cmd', ['/c', sanitizedPath]);

    batch.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    batch.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    batch.on('close', (code) => {
        console.log(`child process exited with code ${code}`);

        //FS.emptyDir( dest, ()=>{
        //  FS.copySync('./dist/win-unpacked/' , dest )
        //})

        console.log("application complete ")

    });


    console.log('Batch file launched!');
}

//launchBatchFile(process.env.MQTT_BAT);


//const init = async () => {

//    const { JSDOM } = require('jsdom');

//    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
//        url: 'http://localhost', // Provide a URL for features like location.href
//    });

    // Attach the jsdom window to the Node.js global object
 //   global.window = dom.window;

 //   LIBRARY = require(path.resolve('./dist/995.library/hunt'));
 //   LIBRARY_ACTION = require(path.resolve('./dist/995.library/00.library.unit/library.action'));
  //  await LIBRARY.hunt(LIBRARY_ACTION.INIT_LIBRARY, { val: 1, dat: null, src: null });

//};


