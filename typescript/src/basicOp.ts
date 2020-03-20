export function initbasicOp(): void {}

console.log("--operator1--");
let a = 1, b = 1, c = 2;
console.log(a === b);
console.log(a == b);
console.log(a !== b);
console.log(a != b);
console.log(a !== c);
console.log(a != c);

console.log("--object dest--");
let { id, contry } = { id: 'happy', contry: 88 }
function printProfile({name = "blank", nationality = "?"}) {
    console.log(name, nationality);
}
printProfile({});
printProfile({name: 'happy'});

type C = { a: string, b?: number };
function fruit({a, b}: C): void {
    console.log(a, b);
}
fruit({a: 'apple', b: 10});
fruit({a: 'apple'});

console.log("--array dest--");
function fnd([first, second]: [number, string]) {
    console.log(first);
    console.log(second);
}
fnd([100, 'hello']);

console.log("--spread op--");
let arr = [3, 4, 5];
let arr2 = [1, 2, ...arr];
let [first, ...rest] = [1, 2, 3];


