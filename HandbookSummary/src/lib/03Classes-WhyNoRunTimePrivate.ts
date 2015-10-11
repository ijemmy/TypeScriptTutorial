//https://typescript.codeplex.com/discussions/397651

//Some may argue that the TS should use closure to create "real private"
//variable at run time
var MyClass = (function () {
    var example;
    function MyClass(value) {
        example = value;
    }
    MyClass.prototype.getExample = function() {
        return example
    }
    return MyClass;
})();


//However, this doesn't go well with prototype
var test1 = new MyClass("test1");
var test2 = new MyClass("test2");

console.log(test1.getExample()) //test2
console.log(test2.getExample()) //test2

//You can avoid using prototype, but that comes with performance
class StringBox {
    getValue: () => string;
    constructor (value: string) {
        this.getValue = () => value;
    }
}

//As a result, the TS team decides to create private class as it is