var FS = require('fs-extra')
var S = require('string')
var Chance = require('chance');
var chance = new Chance();


const { exec } = require('child_process');

//FIRST IMAGE
var tmpAA = 'Send {F5}'
var tmpBB = 'sleep, 6000'

var tmp00 = 'MouseMove,  585,  460'
var tmp01 = 'send {LButton}'
var tmp02 = 'sleep, 200'
var tmp03 = 'send {LButton}'
var tmp04 = 'sleep, 200'
var tmp05 = 'send {LButton}'
var tmp06 = 'sleep, 300'
var tmp07 = 'send {RButton}'
var tmp08 = 'MouseMove,  700,  525'
var tmp09 = 'send {LButton}'
var tmp10 = 'sleep, 6000'
var tmp11 = 'MouseMove,  1880,  160'
var tmp12 = 'sleep, 300'
var tmp13 = 'Send {LButton}'
var tmp14 = 'MouseMove,  620,  250'
var tmp15 = 'send {LButton}'
var tmp16 = 'Send {F5}'
var tmp17 = 'sleep, 6000'

//SECOND IMAGE
var tmp18 = 'MouseMove,  590,  800'
var tmp19 = 'send {LButton}'
var tmp20 = 'sleep, 200'
var tmp21 = 'send {LButton}'
var tmp22 = 'sleep, 200'
var tmp23 = 'send {LButton}'
var tmp24 = 'sleep, 300'
var tmp25 = 'send {RButton}'
var tmp26 = 'MouseMove,  708,  800'
var tmp27 = 'send {LButton}'
var tmp28 = 'sleep, 6000'
var tmp29 = 'MouseMove,  1880,  160'
var tmp30 = 'sleep, 300'
var tmp31 = 'Send {LButton}'
var tmp32 = 'MouseMove,  620,  250'
var tmp33 = 'Send {LButton}'
var tmp34 = 'Send {F5}'
var tmp35 = 'sleep, 6000'


//THIRD IMAGE
var tmp36 = 'MouseMove,  1100,  480'
var tmp37 = 'send {LButton}'
var tmp38 = 'sleep, 200'
var tmp39 = 'send {LButton}'
var tmp40 = 'sleep, 200'
var tmp41 = 'send {LButton}'
var tmp42 = 'sleep, 200'
var tmp43 = 'send {RButton}'
var tmp44 = 'MouseMove,  1200,  548'
var tmp45 = 'send {LButton}'
var tmp46 = 'sleep, 6000' 
var tmp47 = 'MouseMove,  1880,  160'
var tmp48 = 'sleep, 100'
var tmp49 = 'Send {LButton}'
var tmp50 = 'MouseMove,  620,  250'
var tmp51 = 'send {LButton}'
var tmp52 = 'Send {F5}'
var tmp53 = 'sleep, 6000'



//FOURTH IMAGE
var tmp54 = 'MouseMove,  1200,  800'
var tmp55 = 'send {LButton}'
var tmp56 = 'sleep, 200'
var tmp57 = 'send {LButton}'
var tmp58 = 'sleep, 200'
var tmp59 = 'send {LButton}'
var tmp60 = 'sleep, 200'
var tmp61 = 'send {RButton}'
var tmp62 = 'MouseMove,  1320,  800'
var tmp63 = 'send {LButton}'
var tmp64 = 'sleep, 6000'
var tmp65 = 'MouseMove,  1880,  160'
var tmp66 = 'sleep, 100'
var tmp67 = 'Send {LButton}'
var tmp68 = 'MouseMove,  620,  250'
var tmp69 = 'send {LButton}'
var tmp70 = 'sleep, 1000'
var tmp71 = 'sleep, 1000'


var tmp72 = 'MouseMove,  420,  170'
var tmp73 = 'send {LButton}'
var tmp74 = 'Send masterpiece, , supernatural frog horror, chrome key umber colored screen, 2020s, anime, screencap, cinematic, ultimate details, // --ar 16:9 --niji 6 --style raw --stylize 90'
var tmp75 = 'SendInput {enter}'

var last0;
var last1;
var last2;

var action = () => {

    var subject0 = ['jesus', 'child', 'hacker', 'tyrant', 'victim', 'hunter', 'alligator', 'bee', 'swamp', 'dancer']
    var subject = ["interior of dark distressed aztec temple with flooded hallways and flat lighting", "interior of corrupt mayan temple with flooded hallways and flat lighting", "interior of ancient incan temple with unlit hallways and flat lighting", "interior of egyptian ruins with unlit hallways and flat lighting" ]

    var subject0 = [ "single object of a lance", "single object of a lance", "single object of a lance", "single object of a lance"  ]
    var subject1 = [ "single object of a lance", "single object of a lance", "single object of a lance", "single object of a lance "  ]
    
    

    var subject = [...subject0, ...subject1] ;

    //var subject = [ 'magical jewrly' , 'magical jewelry '] ;


    //var subject = FS.readFileSync('./data/subject.txt').toString().split('\n')
    
    //subject.forEach( (a,b )=>{
     //   subject[b] = a.split(':')[1]
    //})

    const camera = FS.readFileSync('./data/camera.txt').toString().split('\n')
    const lighting = FS.readFileSync('./data/light.txt').toString().split('\n')
    const color = FS.readFileSync('./data/color.txt').toString().split('\n')
    const genre = FS.readFileSync('./data/genre.txt').toString().split('\n')
    const flavor = FS.readFileSync('./data/flavor.txt').toString().split('\n')
    
    
    var count = [3, 1, 2]
    var phrase = ['supernatural', 'political', 'spy', 'thriller', 'gothic', 'horror', 'fantasy', 'cyberpunk', 'mystery', 'adventure', 'romance', 'silly', 'glop', 'brutalist', 'western', 'southern']
    var option = ['chroma key green colored screen',  'chroma key umber colored screen', ,  'chroma key yellow colored screen']
    var score = [ ' --ar 16:9 --niji 6 --style raw --stylize 90', ' --ar 16:9 --niji 5 --style expressive --stylize 90']
    var score = [ '  --niji 6 --style raw --stylize 90', ' --niji 5 --style expressive --stylize 90']
    

    var round = chance.pickone(count)

    var boom = ' '

    for (var i = 0; i < round; i++) {
        var pop = chance.pickone(subject)
        boom += pop + ' '
    }

    var now0 = chance.pickone(color)
    var now1 = chance.pickone(score)    
    var now2 = chance.pickone(subject)
    
    // if you want more control
    //now2 = "dark distressed aztec temple with flooded hallways"
    
    var now3 = chance.pickone(camera)
    var now4 = chance.pickone(lighting)
    var now5 = chance.pickone(subject)
    var now6 = chance.pickone(genre)
    var now7 = chance.pickone(flavor)

    if ( now2 != null && now2.replace != null){
        now2 = now2.replace(/\r?\n|\r/g, "");
    }

  
    boom = boom.replace(/\r?\n|\r/g, "");

    tmp74 = 'Send masterpiece, ' + now7 + ' ' + now2 + ' , '  + now6 + ' , ' + now3 + ' , ' + now4 + ' , ' + now5 + ' , ' + boom + ',  ' + now0 + ' , 2020s, anime, screencap, cinematic, ultimate details  ' + now1 + ''
    tmp74 = tmp74.replace(/\r?\n|\r/g, "");

    //tmp12 = ''

    var pix1 = [tmpAA, tmpBB, tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17]
    var pix2 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35]
    var pix3 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53]
    var pix4 = [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71]
    var pmt0 = [tmp72, tmp73, tmp74, tmp75 ]


    //var pix1 = []
    //var pix2 = []
    //var pix3 = []

    const list = [...pix1, ...pix2, ...pix3, ...pix4, ...pmt0] ;

    var output = list.join('\n')

    FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        setTimeout(action, 70306)
    });

}



setTimeout(action, 15000)



