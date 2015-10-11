// <reference path="04-02-Validation.ts" />

module Validation{
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string){
            return lettersRegexp.test(s);
        }
    }
}

/** There are two ways to ensure that all files get loaded
 * 1. Concatenate all of them in the same file
 * tsc --out Validation.ts LettersOnlyValidator.ts (compiler will actually order based on reference tag)
 * 2. Use output js file and refer via <script> (and pray that the order is correct)
 */
