export function initFn(): void {}

console.log("--function1--");
let person = {
    name: "Happy",
    hello: function (name2: string) {
        console.log("Hello, " + this.name + name2);
    }
};
person.hello("World");

console.log("--function2--");
type calcType = (a: number, b: number) => number;
let addCalc: calcType = (a, b) => a + b;
console.log('add ', addCalc(1, 2));
let minusCalc: calcType = (a, b) => a - b;
console.log('minus ', minusCalc(1, 2));

console.log("--function3--");
type echoCallbackType = (message: string) => string;
function echoFun2(message: string, callback: echoCallbackType) {
    return callback(message);
}
let callbackEcho: echoCallbackType = message => message;
console.log('echo ', echoFun2('hello', callbackEcho));

