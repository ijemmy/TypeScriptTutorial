//Uncomment below to try (you need to run tsc command manually
//
// import validation = require('./Validation');
//var lettersRegexp = /^[A-Za-z]+$/;
//export class LettersOnlyValidator implements validation.StringValidator {
//    isAcceptable(s: string) {
//        return lettersRegexp.test(s);
//    }
//}

/**
 * Normally, if you export the class. You will use it this way
 * import  abc = require('./LetterOnlyValidator');
 * var validator = new abc.LetterOnlyValidator();
 *
 * Instead of exporting the class. You can use the syntax below to export it to one level higher.
 * Making it easier to consume
 * import letterOnlyValidator= require('./LetterOnlyValidator');
 * var validator = new letterOnlyValidator();
 */
//export = LettersOnlyValidator;