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

console.log('--symbol1--')
let firstName = Symbol('first name');
let person1 = {};
person1[firstName] = 'Hoon';
console.log(person1[firstName]);

console.log('--symbol2--')
let person2 = {
    [firstName]: 'Hoon'
};
Object.defineProperty(person2, firstName, {writable: false});
let lastname = Symbol('last name');
Object.defineProperties(person2, {
    [lastname]: {
        value: 'Jin',
        writable: false
    }
});
console.log(person2[firstName]);
console.log(person2[lastname]);

console.log('--symbol2--')
let uid = Symbol.for('uid');
let object2 = {};
object2[uid] = '12345';
console.log(object2[uid]);
console.log(uid);

console.log('--set1--')
let set1 = new Set([1,2]);
let processor = {
    output(value) {
        console.log(value);
    },
    process(dataset) {
        dataset.forEach((value) => this.output(value));
    }
};
processor.process(set1);

console.log('--map1--')
let key1 = {}, key2 = {},
    map = new WeakMap([[key1, 'hello'], [key2, 9]]);
console.log(map.has(key1));
console.log(map.get(key1))
console.log(map.has(key2));
console.log(map.get(key2))

console.log('--iter1--')
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
let iter1 = createIterator();
console.log(iter1.next().value);
console.log(iter1.next().value);
console.log(iter1.next().value);
console.log(iter1.next().value);

console.log('--iter2--')
function *createIterator2(items) {
    for (let i = 0; items.length; i++) {
        yield items[i];
    }
}
let iter2 = createIterator2([1,2,3]);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

console.log('--iter3--')
let values1 = [1, 2, 3];
for (let num1 of values1) {
    console.log(num1);
}


