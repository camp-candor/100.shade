var FS = require('fs-extra')
var S = require('string')

const { exec } = require('child_process');

var tmpAA = 'send {WheelUp 1}'
var tmpBB = 'send {WheelUp 1}'
var tmpCC = 'send {WheelUp 1}'
var tmpDD = 'send {WheelUp 1}'
var tmpEE = 'send {WheelUp 1}'
var tmpFF = 'send {WheelUp 1}'
var tmpGG = 'send {WheelUp 1}'
var tmpHH = 'send {WheelUp 1}'
var tmpII = 'send {WheelUp 1}'
var tmpJJ = 'send {WheelUp 1}'
var tmpKK = 'send {WheelUp 1}'
var tmpLL = 'send {WheelUp 1}'

var tmp00 = 'MouseMove, 178, 325'
var tmp01 = 'send {RButton}'
var tmp02 = 'Send, ^a'
var tmp03 = 'Sleep, 1500'
var tmp04 = 'Send, ^c'
var tmp05 = 'Send supernatural political spy thriller lizard-skull-gator-man<lora:lizard-skull-gator-man:1.703693> '
var tmp06 = 'MouseMove, 904, 733'
var tmp07 = 'send {RButton}'
var tmp08 = 'Sleep, 1500'
var tmp09 = 'MouseMove, 450, 910'
var tmp10 = 'send {RButton}'
var tmp11 = 'Sleep, 1550'
var tmp12 = 'Send 00000 '
var tmp13 = 'SendInput {enter}'
var tmp14 = 'Sleep, 1500'
var tmp15 = 'MouseMove, 1590, 400'
var tmp16 = 'send {RButton}'

var last0;
var last1;
var last2;

var action = () => {

    console.log("action")

    if (last0 != null) {

        var lastDirList = FS.readdirSync('../kitchen/diffusion/outputs/img2img-images/')
        var lastDir = lastDirList.pop();

        var nowDir = '../kitchen/diffusion/outputs/img2img-images/' + lastDir
        var lastImgList = FS.readdirSync(nowDir)
        var lastImg = lastImgList.pop()

        if (lastImg != null) {

            var here = lastImg.split('.').pop()

            const sec = Math.floor(Date.now() / 1000);

            var fin = sec + '.' + last0 + '-' + last1 + '-' + last2 + '.' + lastImg;

            var input = nowDir + '/' + lastImg;
            var out = '../kitchen/work/' + fin;

            FS.ensureFileSync( out )

            FS.copyFileSync(input, out)
            //FS.removeSync(input)
        }


    }



    var accept = 'masterpiece, blonde assassin woman in winter gear with no hat and no hood , 2020s, anime, screencap, cinematic, ultimate details'

    var images = FS.readdirSync('../image')

    var phrase = ['supernatural', 'political', 'spy', 'thriller', 'gothic', 'horror', 'fantasy', 'cyberpunk', 'mystery', 'adventure', 'romance', 'silly', 'glop', 'brutalist', 'western', 'southern']

    var subject = FS.readFileSync('./data/subject.txt').toString().split('\n')

    subject.forEach((a, b) => {
        subject[b] = a.split(':')[1]
    })

    const camera = FS.readFileSync('./data/camera.txt').toString().split('\n')
    const lighting = FS.readFileSync('./data/light.txt').toString().split('\n')
    const color = FS.readFileSync('./data/color.txt').toString().split('\n')
    const genre = FS.readFileSync('./data/genre.txt').toString().split('\n')

    var count = [3, 4, 2]

    var option0 = ['cludstrumellomush', 'kaaarth-girl', 'kbar-riddlez', 'larry-duck-man', 'eagle-paw-paw-haw', 'zoggg', 'orbie-mayhaw', 'frankenthroat-punch-pusspack', 'purehearttedcattlin']
    var option = ['lizziskullieyiii', 'lizziskullieyiii']

    var option = ['limmeeinealspwarce', 'tresurtempleees', 'skulllizarrrd', 'swaaampeeedpaddeene', 'fortwweenkaygldjeeerrly']


    var option = ['greasi-gallllloooonz', 'greasi-gallllloooonz']

    //var score = ['0.2703693', '0.4703693', '0.703693', '0.903693', '1.703693', '1.03693', '1.203693', '1.303693', '1.403693', '1.99403693']

    var score = ['1.03693', '1.203693', '1.303693', '1.1403693', '0.93693', '0.8203693', '1.246303693', '1.070403693']


    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

    var round = chance.pickone(count)

    var love = chance.pickone(images)

    var boom = ''

    for (var i = 0; i < round; i++) {
        var pop = chance.pickone(subject)
        boom += pop + ' '
    }

    var nowAA = chance.pickone(option0)
    var nowBB = chance.pickone(option0)
    var now0 = chance.pickone(option)
    var now1 = chance.pickone(score)

    var now2 = chance.pickone(subject)
    var now3 = chance.pickone(camera)
    var now4 = chance.pickone(lighting)
    var now5 = chance.pickone(color)
    var now6 = chance.pickone(genre)

    if (now2 != null) {
        now2 = now2.replace(/\r?\n|\r/g, "");
    }

    boom = boom.replace(/\r?\n|\r/g, "");

    var main = 'Send ' + boom + ' '
    tmp05 = 'Send masterpiece, muthrefxk character, ' + now6 + ' , ' + + now5 + ' , ' + now4 + " , " + now3 + " , " + now2 + ', cinematic, ultimate details, anime, 2020s  '

    tmp05 = tmp05.replace(/\r?\n|\r/g, "");

    now0 = 'muthrefxk'

    tmp05 += ' <lora:' + now0 + ':' + chance.pickone(score) + '>'
    //tmp05 += ' ' + '<lora:' + nowAA + ':' + chance.pickone(score) + '>'
    //tmp05 += ' ' + '<lora:' + nowBB + ':' + chance.pickone(score) + '>'



    tmp12 = 'Send ' + love

    //tmp12 = ' '
    last0 = now0;
    last1 = now1;
    last2 = S(boom).slugify().s;

    var list = [tmpAA, tmpBB, tmpCC, tmpDD, tmpEE, tmpFF, tmpGG, tmpHH, tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16]

    var output = list.join('\n')

    FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        setTimeout(action, 60000 * 1 + 6500)
    });

}



setTimeout(action, 10000)



