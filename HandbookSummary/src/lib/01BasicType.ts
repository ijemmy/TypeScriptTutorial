//====================================
//#Basic types
//====================================
var isDone: boolean = false;
var name: string = 'bob';
var age: number = 37;
var something: any = 65;

//====================================
//#Assigning incorrect type
//====================================
//name = 10;  //error TS2322: Type 'number' is not assignable to type 'string'.

//====================================
//#Template string can span multiple lines & have embedded expression
//====================================
var sentence: string = `Hello, my name is ${ name }

I will be ${ age + 1} in the next month`;

//====================================
//#Array declaration
//====================================
//#1
var list1: number[] = [1,2,99];
//#2
var list2: Array<number> = [1,2,9];

//Array of 'any' is like in JS
var listOfany: any[] = [1, 'hiho', false];

//====================================
//#Enum
//====================================
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
//The implementation of Color is interesting
console.log('Color = %o', Color);

//You can specify the enum's value
enum Color2 {Red = 1, Green, Blue = 4};

//====================================
//# Enum class
//====================================
class Animals{
    public static CAT={str:"meow",id:1};
    public static DOG={str:"woof",id:2};
    public static RABBIT={str:"...",id:3};
    //Disadvantage, they are mutable
}

//Referring it by index to get string (not Color2 object !!)
var colorName: string = Color2[4]; //Blue

//====================================
//# void
//====================================
function returnNothing(): void{
    //function that returns nothing
}
