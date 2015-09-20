//====================================
//# Interface can be used for defining object shape
//====================================

interface LabelledValue{ //Note that the naming convention is like Java
    label: string;
}

function printLabel(labelledObj: LabelledValue){
    console.log('labelledObj.label = ' + labelledObj.label);
}

// Notice that there is no interface implementation. It is just a type definition
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
    //return 'hiho'; //The return type is checked implicitly
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
    //All fields are always public
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