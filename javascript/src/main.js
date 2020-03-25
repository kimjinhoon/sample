var funcs = [],
    obj = {
        a: true, b: true, c: true
    },
    str = 'hi';

// for (var i=0; i<10; i++) {
//     funcs.push(function() {
//         console.log(i);
//     });
// }
for (const key in obj) {
    funcs.push(function() {
        console.log(key);
    })
}
for (const value of str) {
    funcs.push(function() {
        console.log(value);
    })
}
funcs.forEach(function(func) {
    func();
});

console.log('--string1--')
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
var text = '古a';
console.log(text.length);
console.log(/^.$/.test(text));
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));
console.log(text.codePointAt(0));
console.log(text.codePointAt(1));
console.log(is32Bit('古'));
console.log(is32Bit('a'));
console.log(String.fromCodePoint(21476));

console.log('--string2--')
let msg = 'hello world!';
console.log(msg.startsWith('hello'));
console.log(msg.endsWith('!'));
console.log(msg.includes('o'));
console.log(msg.startsWith('o'));
console.log(msg.endsWith('world!'));
console.log(msg.includes('x'));
console.log(msg.startsWith('o', 4));
console.log(msg.endsWith('o', 8));
console.log(msg.includes('o', 8));

console.log('--string3--')
console.log('x'.repeat(3));
console.log('hello'.repeat(2));
console.log('abc'.repeat(4));

console.log('--object1--')
let person = {
    getGreeting() {
        return 'hello';
    }
};
let dog = {
    getGreeting() {
        return 'Woof';
    }
};
let friend = Object.create(person);
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) == person);

console.log('--destructuring1--')
let node = {
    type: 'Identifier',
    name: 'foo'
    }
    type = 'Literal',
    name = 5;
// ({type, name} = node);
function outputInfo(value) {
    console.log(value === node);
}
outputInfo({type, name} = node);
console.log(type);
console.log(name);

console.log('--destructuring1--')
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

