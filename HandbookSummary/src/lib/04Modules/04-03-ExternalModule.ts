//====================================
//# External Module (only required for node.js & require.js)
//====================================

// To compile, you need an extra argument
// tsc --module commonjs Test.ts

//Exporting is pretty much the same way

//Uncomment below to try (you need to run tsc command manually
//
//import validation = require('./Validation');
//import letters = require('./LettersOnlyValidator');
//
//// Some samples to try
//var strings = ['Hello', '98052', '101'];
//// Validators to use
//var validators: { [s: string]: validation.StringValidator; } = {};
//validators['Letters only'] = new letters.LettersOnlyValidator();
//// Show whether each string passed each validator
//strings.forEach(s => {
//    for (var name in validators) {
//        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
//    }
//});