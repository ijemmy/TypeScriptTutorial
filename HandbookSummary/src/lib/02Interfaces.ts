//====================================
//# Interface can be used for defining object shape
//====================================

interface LabelledValue{ //Note that the naming convention is like Java
    label: string;
}

function printLabel(labelledObj: LabelledValue){
    console.log('labelledObj.label = ' + labelledObj.label);
}

// Note that there is no interface implementation. It is just a type definition
var myObj: LabelledValue = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);

//var invalidLabelledObj: LabelledValue = {size:10};

//====================================
//# Order doesn't matter
//====================================
interface Car{
    name: string;
    registerNo: number;
}

var myCar = {
    registerNo: 1234,
    name: 'Tuktuk'
};

//====================================
//# Optional parameter with ?
//====================================
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number;}{
    var newSquare = {
        color: 'white',
        area: 100
    };

    if(config.color){
        newSquare.color = config.color; //Even it's optional, it will catch any typo we make (ex. if we type 'collor' here)
    }

    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

var mySquare = createSquare({color: 'black'});

//====================================
//# Function Types
//====================================
//#We can define a function interface !!
interface SearchFunc {
    (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;

//Note that the name of parameters doesn't matter
mySearch = function (hay: string, needle: string) {
    var result = hay.search(needle);
    //return 'hiho'; //The return type is checked "implicitly"
    return !(result == -1);
};

//====================================
//# Array Types
//====================================
interface StringArray {
    [index: number]: string; //Normal array
}

//You can make index a string (associative array), but it will conflicts with other properties
interface Dictionary{
    [index: string]: string; //Associative array
    //length: number; Error: Property 'length' of type 'number' is not assignable to string index type 'string'.

}

//====================================
//# Class Types
//====================================

//#Implementing an interface
interface ClockInterface{
    //All fields are always public, why would you need private interface?
    currentTime: Date; //Variable
    setTime(d: Date); //Method
}

class Clock implements ClockInterface{
    currentTime: Date;

    //Class has method's implementation
    setTime(d: Date){
        this.currentTime = d;
    }
    //Class has constructor
    constructor(h: number, m: number){}
}

//====================================
//# Differences between static/instance of the class
//====================================

interface ClockStatic{
    new (hour: number, minute: number); //static
}

//Error TS2420: Class 'Clock2' incorrectly implements interface
//class Clock2 implements ClockStatic{
//    currentTime: Date;
//    constructor(h: number, m: number){}
//}

//Instead, you need to do it this way
class Clock2 { //Notice that there's no "implements ClockStatic" !!
    currentTime: Date;
    constructor(h: number, m: number){}
}

var cs: ClockStatic = Clock;
var clockInstance = new cs(7, 30);



//====================================
//# Extending interface
//====================================
interface Shape{
    color: string;
}

interface Square extends Shape{
    sideLength: number;
}

var square = <Square>{};
square.sideLength = 6;
square.color = 'blue';

//You can do multiple extends !!

interface ShadeObject{
    opacity: number;
}

interface ShadeSquare extends Square, ShadeObject{

}

//====================================
//# Hybrid types (being both function and object)
//====================================
interface Counter{
    (start: number): string;
    interval: number;
    reset(): void;
}

var counter: Counter; //Note that this is just an interface
counter(10);
counter.reset();
counter.interval = 5.0;

//You will usually encounter this with 3rd party JS library