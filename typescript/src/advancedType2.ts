export function initAdType(): void {}

console.log("--advancedType1--");
interface Profile {
    name: string;
    gender: string;
    age: number;
}
type Profile1 = keyof Profile;
type Profile2 = keyof Profile[];
type Profile3 = keyof { [x: string]: Profile};
type Profile4 = keyof Profile['name'];
type Profile41 = keyof string;
let pValue1: Profile1 = 'name';
// let pValue2: Profile1 = 'name2';
let pValue2: Profile2 = 'length';
let pValue3: Profile2 = 'push';
let pValue4: Profile3 = 'hello';
let pValue5: Profile4 = 'length'
console.log(`
1번: ${pValue1} / 2번: ${pValue2} / 3번: ${pValue3}
4번: ${pValue4} / 5번: ${pValue5}
`);

console.log("--advancedType2--");
class AddCalc {
    public constructor(public value: number = 0) { }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
}
class MyCalc extends AddCalc {
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}
let calc = new MyCalc(3).multiply(5).add(10);
console.log(calc.value);
let calc2 = new MyCalc(3).add(3).multiply(10);
console.log(calc2.value);

console.log("--advancedType3--");
let values = [0, 'c', null];
let myNum: any = '2017';
let num1 = + myNum;
let num2 = Number(myNum);
let num3 = parseInt(myNum);
console.log(`num1=${num1}, ${typeof num1}`);
console.log(`num2=${num2}, ${typeof num2}`);
console.log(`num3=${num3}, ${typeof num3}`);

let num4: number = <number>myNum;
let num5: number = myNum as number;
console.log(`num4=${num4}, ${typeof num4}`);
console.log(`num5=${num5}, ${typeof num5}`);


