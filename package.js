var FS = require( 'fs-extra')
var S = require('string')

var exec = require('child_process').exec;

exec('tsc -b 110.shade', async (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
    }

    console.log("we have shade")

    var src = '110.shade'

    var exec = require('child_process').exec;
    if (src == null)
        src = '110.shade';

    
    var template = 'node ./data/hand/000.eveiefy -t ' + src;
    exec(template, async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        // console.log("bundling " + bal.src)
        //bit = await ste.bus(ActDsk.WRITE_DISK, { src: './002.bundle-pivot.bat', dat: template })
        //bit = await ste.bus(ActDsk.BATCH_DISK, { src: '002.bundle-pivot.bat' })


        var list = FS.readFileSync('./work/110.shade.js',{encoding:'utf8'}).toString().split('\n');

        var check = ''

        var output = []

        list.forEach( (a, b)=>{

            if ( a.includes('_globals = (function(){ return this || (0,eval)("this"); }());') == true ) {
                list[b] = ''
                console.log(a)
            }

        })
        
        //list = S( list ).replaceAll( , '').s
        FS.writeFileSync( './work/110.shade.js', list.join('\n') )
        console.log('fin 110.shade')

    });

})