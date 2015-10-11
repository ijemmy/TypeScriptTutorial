//====================================
//# Simple Class
//====================================
class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}
var greeter: Greeter = new Greeter('world');
greeter.greet();

//====================================
//# Inheritance
//====================================
class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    move(meters: number = 0){
        console.log(this.name + 'has moved ' + meters + 'meters');
    }

    grunt(){
        console.log('hmmm');
    }
}

//Type script add __extends function to handle "extends"
class Snake extends Animal{
    constructor(name: string){
        super(name); //Super can be used !!
    }

    move(meters = 5){
        console.log("Slithering ...");
        super.move(meters);
        //In JS code, 'super' will be passed as a paremeter
        //The super call will be  _super.prototype.move.call(this, meters);
    }

    //Simple overriding is simple in JS code, no need to use _super
    grunt(){
        console.log('hiss..');
    }
}

var ann: Animal = new Snake('Anny the snake');

//====================================
//# Private/Public modifiers
//====================================
//Each member is PUBLIC BY DEFAULT !!!

class PrivateAnimal{
    private name: string;
    constructor(theName: string){
        this.name = name;
    }
}

//Since there is no real 'private' support in JS
//The private check is done by TS on transpiller level
var john: PrivateAnimal = new PrivateAnimal('John the private');
//john.name; //error TS2341: Property 'name' is private and only accessible within class 'PrivateAnimal'.

//No, it is not going to create closure for you :)


//====================================
//# private is not the same as public type
//====================================

//error TS2346: Supplied parameters do not match any signature of call target.
//var animal: Animal = new PrivateAnimal();

//====================================
//# Parameter options
//====================================
//If you set parameter to 'private' or 'public',they will be assigned to 'this' with the same name automatically
class AutoAssign{
    //name: string; //Notice that you don't even need to declare private variable here
    constructor(private name: string){

    }
}


//====================================
//# Accessor (only supported in ES5 target)
//====================================
var passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            alert("Error: Unauthorized update of employee!");
        }
    }
}

var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

//====================================
//# Static properties
//====================================

class Grid{
    static origin = {x:0, y:0};
    calculateDistanceFromOrigin(point: {x: number; y: number}){ // Notice that the separator b/w x and y is semicolon, no comma
        var xDist = (point.x - Grid.origin.x); //Static variable is referred from class name
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(private scale: number){}
}

//====================================
//# Variable with constructor as a type
//====================================
class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

var Greeter21: Greeter2;
Greeter21 = new Greeter2();
alert(Greeter21.greet());

//If you look at JS code, the maker is pointed to the constructor
var Greeter2Maker: typeof Greeter2 = Greeter2;
//By modifying this, it's equivalent to modify Greeter2.standardGreeting
Greeter2Maker.standardGreeting = "Hey there!";
var Greeter22:Greeter2 = new Greeter2Maker();
alert(Greeter22.greet()); //"Hey there!"
alert(Greeter21.greet()); //"Hey there!"

//====================================
//# Using class as an interface
//====================================
class PointClass{
    x: number;
    y: number;
}

var p: PointClass = {x:0, y:0}; //You can use it as an interface

//You can even extends it to an interface
interface Point3DClass extends PointClass{
    z: number;
}

var p3d: Point3DClass = {x:0, y:0, z:0};
