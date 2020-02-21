var fs = require('fs');
var path=require('path');
var readline = require("./node-readline/node-readline.js");

var source = "../src/fichiersAcompiler.js";
var target = "../dist/mathml2braille.js";

var chemin=path.dirname(source);


function copier(source, target) {
    var r = readline.fopen(source, "r");
    if (r === false) {
        console.log("Error, can't open ", source);
        process.exit(1);
    }

    var w = fs.openSync(target, "w");
    var count = 0;
    do {
        var line = readline.fgets(r);
        line = retourneLine(line);
        fs.writeSync(w, line + "\n", null, 'utf8');
        count += 1;
    } while (!readline.eof(r));
    readline.fclose(r);
    fs.closeSync(w);

    console.log(count, " lines read.");
}

function retourneLine(line) {
    if (typeof line === 'string' && line.indexOf('insérer') !== -1) {
        var file = line.split(' ').pop().replace('\r','');
        var pathChemin=chemin+'/'+file;
        var data = fs.readFileSync(pathChemin.toString(),'utf8');
        if (data === false) {
            console.log("Error, can't open ", source);
            process.exit(1);
        }
       line=data;
    }
    return line
}

copier(source, target);