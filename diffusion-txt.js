var FS = require('fs-extra')
var S = require('string')

const { exec } = require('child_process');

var tmp00 = 'MouseMove, 196, 332'
var tmp01 = 'send {RButton}'
var tmp02 = 'Send, ^a'
var tmp03 = 'Sleep, 1150'
var tmp04 = 'Send, ^c'
var tmp05 = 'Send supernatural political spy thriller lizard-skull-gator-man<lora:lizard-skull-gator-man:1.703693> '
var tmp06 = 'Sleep, 1150'
var tmp07 = 'Sleep, 1500'
var tmp08 = 'send {RButton}'
var tmp09 = 'Sleep, 115'
var tmp10 = 'Sleep, 115'
var tmp11 = 'Sleep, 1500'
var tmp12 = 'Sleep, 115'
var tmp13 = 'Sleep, 115'


var tmp14 = 'Sleep, 115'
var tmp15 = 'Sleep, 115'
var tmp16 = 'Sleep, 115'
var tmp17 = 'Sleep, 115'
var tmp18 = 'Sleep, 115'

var tmp19 = 'Sleep, 3150'
var tmp20 = 'MouseMove, 1111, 345'


var tmp21 = 'Sleep, 3150'
var tmp22 = 'send {RButton}'
var tmp23 = 'Sleep, 1150'


var last0;
var last1;
var last2;

var action = () => {

    console.log("action")

    if (last0 != null) {

        var lastDirList = FS.readdirSync('../kitchen/diffusion/outputs/txt2img-images/')
        var lastDir = lastDirList.pop();

        var nowDir = '../kitchen/diffusion/outputs/txt2img-images/' + lastDir
        var lastImgList = FS.readdirSync(nowDir)
        var lastImg = lastImgList.pop()

        if (lastImg != null) {

            tmp07 = 'Sleep, 10'
            tmp08 = 'Sleep, 10'
            tmp09 = 'Sleep, 10'
            tmp10 = 'Sleep, 10'
            tmp11 = 'Sleep, 10'
            tmp12 = 'Sleep, 10'
            tmp13 = 'Sleep, 10'




            var here = lastImg.split('.').pop()

            const sec = Math.floor(Date.now() / 1000);

            var fin = sec + '.' + last0 + '-' + last1 + '-' + last2 + '.' + lastImg;

            var input = nowDir + '/' + lastImg;
            var out = '../work/' + fin;

            FS.copyFileSync(input, out)
            //FS.removeSync(input)
        }

    }


    var accept = 'masterpiece, blonde assassin woman in winter gear with no hat and no hood , 2020s, anime, screencap, cinematic, ultimate details'

    FS.ensureDirSync('../kitchen/image')
    var images = FS.readdirSync('../kitchen/image')
    var phrase = ['supernatural', 'political', 'spy', 'thriller', 'gothic', 'horror', 'fantasy', 'cyberpunk', 'mystery', 'adventure', 'romance', 'silly', 'glop', 'brutalist', 'western', 'southern']
    var subject = FS.readFileSync('./data/subject.txt').toString().split('\n')

    subject.forEach((a, b) => {
        subject[b] = a.split(':')[1]
    })



    const camera = FS.readFileSync('./data/camera.txt').toString().split('\n')
    const lighting = FS.readFileSync('./data/light.txt').toString().split('\n')
    const color = FS.readFileSync('./data/color.txt').toString().split('\n')


    var count = [3, 4, 2]

    var loraList = FS.readdirSync('../kitchen/lora')

    loraList.forEach((a, b) => {

        var heh = loraList[b] = a.split('.')[0]






    })





    var option = ['interiorzhousebottt', 'lizziskullieyiii', 'cludstrumellomush', 'kaaarth-girl', 'kbar-riddlez', 'larry-duck-man', 'eagle-paw-paw-haw', 'zoggg', 'orbie-mayhaw']

    option = option.concat(loraList)

    //var option = ['zoggg', 'zoggg']





    //var score = ['0.2703693', '0.4703693', '0.703693', '0.903693', '1.703693', '1.03693', '1.203693', '1.303693', '1.403693', '1.99403693']

    var score = ['1.03693', '1.203693', '1.1303693', '1.1403693', '0.93693', '0.8203693', '1.046303693', '0.970403693']

    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

   // var love = chance.pickone(images)

    var round = chance.pickone(count)

    //  var love = chance.pickone(images)

    var boom = ''

    for (var i = 0; i < round; i++) {
        var pop = chance.pickone(subject)
        boom += pop + ' '
    }

    var now0 = chance.pickone(option)
    var now1 = chance.pickone(score)

    var now2 = chance.pickone(subject)
    var now3 = chance.pickone(camera)
    var now4 = chance.pickone(lighting)
    //now4 = 'Dimly lit'

    var now5 = chance.pickone(color)
    // now5 = 'chroma key green colored screen'


    now2 = now2.replace(/\r?\n|\r/g, "");
    boom = boom.replace(/\r?\n|\r/g, "");

    var main = 'Send ' + boom + ' '

    var role = ['beast', 'tyrant', 'martyr', 'addict', 'ambassador', 'prophet', 'lover', 'mosquito', 'alligator', 'champion', 'spouse', 'pirate', 'spy', 'cowboy', 'vampire']

    var holder = []
    //holder.push ( {idx:'zoggg' , src:'zoggg beast'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg tyrant'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg martyr'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg addict'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg ambassador'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg prophet'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg lover'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg mosquito'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg alligator'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg champion'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg spouse'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg pirate'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg spy'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg cowboy'} )
    //holder.push ( {idx:'zoggg' , src:'zoggg vampire'} )
    holder.push({ idx: 'zoggg', src: 'zoggg leach' })
    holder.push({ idx: 'zoggg', src: 'zoggg robot' })
    holder.push({ idx: 'zoggg', src: 'zoggg femme fatal' })
    holder.push({ idx: 'zoggg', src: 'zoggg champion' })
    holder.push({ idx: 'zoggg', src: 'zoggg champion' })
    holder.push({ idx: 'zoggg', src: 'zoggg artist' })
    holder.push({ idx: 'zoggg', src: 'zoggg construction worker' })
    holder.push({ idx: 'zoggg', src: 'zoggg politian' })
    holder.push({ idx: 'zoggg', src: 'zoggg journalist' })
    holder.push({ idx: 'zoggg', src: 'zoggg celebrity' })

    subject.forEach((a) => {

        var now = chance.pickone(option)

        holder.push({ idx: now, src: now + ' ' + a })


    })


    //holder.push ( {idx:'fortwweenkaygldjeeerrly' , src:'fortwweenkaygldjeeerrly treasure'} )
    //holder.push ( {idx:'limmeeinealspwarce' , src:'limmeeinealspwarce environment'} )
    //holder.push ( {idx:'opuuulestostentateweap' , src:'opuuulestostentateweap weaponary'} )
    //holder.push ( {idx:'skulllizarrrd' , src:'skulllizarrrd creature'} )
    //holder.push ( {idx:'swaaampeeedpaddeene' , src:'swaaampeeedpaddeene exterior'} )
    //holder.push ( {idx:'tresurtempleees' , src:'tresurtempleees interior'} )


    holder = [{ idx: 'muthrefxk', src: 'muthrefxk ' }, { idx: 'muthrefxk', src: 'muthrefxk ' }]

    var bonk = chance.pickone(holder)

    var pew = ' ' + chance.pickone(role)


    //tmp05 = 'Send masterpiece, ' + now2 + ' , ' + now3 + ' , ' + now4 + ' , 2020s, anime, cinematic, '

    tmp05 = 'Send masterpiece , ' + bonk.src + ' ' + pew + ' , ' + now2 + ' , ' + now3 + ' , ' + now4 + ' , ' + now5 + '  , 2020s, anime, screencap, cinematic, ultimate details  '
    //tmp05 = 'Send ' + bonk.src + ' , ' + now3 + ' , ' + now4 + ' , ' + now5
    tmp05 = tmp05.replace(/\r?\n|\r/g, "");
    tmp05 += ' <lora:' + bonk.idx + ':' + now1 + '>'
    //tmp12 = 'Send ' + love

    //if (lastImg == null) tmp12 = 'Send ' + love

    //
    //masterpiece, temple interior , neutral angle shot , Broad lighting , 2020s, anime, screencap, cinematic, ultimate details   <lora:tresurtempleees:1>

    tmp05


    //tmp12 = ' '


    last0 = now0;
    last1 = now1;
    last2 = S(boom).slugify().s;

    var list = [tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23]

    var output = list.join('\n')

    FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        setTimeout(action, 60000 * 5 + 10300)
    });



}



setTimeout(action, 13000)



