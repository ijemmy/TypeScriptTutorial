//====================================
//# Define function type
//====================================
function add(x: number, y: number): number{
    return x + y;
}

var myadd : (x: number, y: number)=> number = add;

//Parameter name doesn't really matter
var myadd2: (base: number, increment: number)=> number = add;

//=> is required. If function doesn't return value, use "void" as the type
var myadd3: ()=> void = function(){};

//Type inference is possible
var myadd4: (x: number, y: number)=> number = function(x, y){ return x+y; }

//====================================
//# Optional and default parameters
//====================================

//Every parameter is mandatory, you can't leave it empty and expect it to be null
//var res = add(10); // error TS2346: Supplied parameters do not match any signature of call target.

//You can add ? to make it optional
//The optional parameters must come at the end of the list
function add2(x: number, y?: number): number{
    return x + y;
}

//or add = to set default value
function add3(x: number, y: number = 10): number{ //Note that I have to remove '?' or tsc will throw error
    return x + y;
}
console.log(add2(2)); // 12

//====================================
//# Rest parameters
//====================================
//Instead of working with 'arguments' variable, you can define that explicitly in TS
function buildName(firstName: string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}

//If you look at TS, it copies arguments into restOfName
//Note that the var _i is created for iteration through arguments at the beginning

//====================================
//# Lambdas and using this
//====================================

/**
 * In JS, if the callback function is called, the 'this' variable
 * will come from the context that the event triggers callback.
 * Don't mistake it as the instance of the object.
 *
 * To fix this, you can use lambda syntax ( ()=>{}  )
 */

var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier

        //When you use lamda, a var _this is created in closure for reference (similar to 'that' pattern)
        return () => {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);


//====================================
//# Overload
//====================================

//If we look at the function pickCard() below, there is no type definition
//for its parameter. Can we allow only 'object' and 'number' type?
var suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

//Here we see how the overload works in TS

//First you define the overloaded of the function (with the same name)
//It is customary to start from most specific one to the least specific one
function pickCardWithOverLoad(x: {suit: string; card: number; }[]): number;
function pickCardWithOverLoad(x: number): {suit: string; card: number; };

//Then you declare the actual implementation (not part of the overloaded list)
function pickCardWithOverLoad(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

//The overloaded functions are only used in TS for type check. The actual JS code is the same

//If you try to provide other arguments, the error will be thrown at transpile-time
//pickCardWithOverLoad(true); error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'number'.