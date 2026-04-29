const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./100.shade');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('import * as clone from "clone-deep";')) {
        content = content.replace('import * as clone from "clone-deep";', 'import clone = require("clone-deep");');
        fs.writeFileSync(file, content);
        console.log('Fixed ' + file);
    }
});
