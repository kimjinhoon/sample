export function initbasicLoop(): void {}

console.log("--switch1--");
let input2 = 0;
switch (input2) {
    case 0:
        // console.log("Number 0");
    case 1:
        console.log("Number 1");
        break;
}

console.log("--for1--");
let islands = ["Jejudo", "Geojedo", "Jindo", "Ganghwado", "Namhaedo"];
for (let index in islands) {
    console.log(index, islands[index]);
}
console.log("--for2--");
let fruits = { "a": "apple", "b": "banana", "c": "cherry" };
for (let property in fruits) {
    console.log(property);
    // console.log(property, fruits[property]);
}
console.log("--for3--");
for (let value of 'fruits') {
    console.log(value);
    // console.log(property, fruits[property]);
}

console.log("--map1--");
let map1 = new Map([['one', 1], ['one', 2]]);
map1.set('one', 3);
for (let entry of map1) {
    console.log(entry);
}

console.log("--set1--");
let set1 = new Set(['a', 'b', 'c', 'd', 'a', 'b', 'c']);
for (let value of set1) {
    console.log(value);
}
