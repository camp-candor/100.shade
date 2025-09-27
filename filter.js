var FS = require('fs-extra')
var S = require('string')
var Chance = require('chance');
var chance = new Chance();

var list = FS.readdirSync('/./filter')


list.forEach((a, b) => {

    var png = false;
    var jpg = false;

    var hmm = a.split('.')
    var itm = hmm.pop()

    if (itm == null) return

    if (itm == 'png') png = true
    if (itm == 'jpg') jpg = true
    if (itm == 'jpeg') jpg = true
    if (itm == 'JPG') jpg = true


    if (png == false && jpg == false) return console.log('not present ' + a)

    a = a.toLowerCase()

    var now = S(a).replaceAll('.png', '')
    now = S(now).replaceAll('.jpg', '')
    now = S(now).slugify().s

    var pin = chance.bb_pin()

    var file = now + '-' + pin;

    png
    jpg

    if (png == true) { file += '.png' }
    if (jpg == true) { file += '.jpg' }

    var input = '../junk/' + a
    var output = "../umbrella/" + file

    FS.copyFileSync( input, output)
    FS.removeSync( input )

    console.log('check... ' + output)

    //check to see if png
    //check to see if jpg
    //return if not an image 





})