
export enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}
const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);

export enum Language {
    Korean = 'ko',
    Englisth = 'en',
    China = 'ch'
}

export function getEnumLength(enumObject: any) {
    const keys = Object.keys(enumObject);
    return keys.reduce(
        (acc, key) => (typeof enumObject[key] === 'string' ? acc + 1 : acc),
        0,
    )
}

export function isValidEnumValue(enumObject: any, value: number | string) {
    if (typeof value === 'number') {
        return !!enumObject[value];
    } else {
        return (
            Object.keys(enumObject)
            .filter(key => isNaN(Number(key)))
            .find(key => enumObject[key] === value) != null
        );
    }
}

const getInfoText: (name: string, age: number) => string = function(name, age) {
    return '';
}

function getParam(this: string, index: number): string {
    const params = this.split(',');
    return '';
}

interface Person {
    name: string;
    age: number;
   // [key: string]: string | number;
}
const p1: Person = {
    name: 'hoon',
 //   berthday: '1990-01-01',
    age: 21
};
p1['age'] = 0;

interface YearPriceMap {
    [year: number]: number;
    [year: string]: string | number;
}
const yearMap: YearPriceMap = {};
yearMap[1] = 1000;
yearMap[2] = 2000;
yearMap['3'] = 'abc3';
yearMap['4'] = 'abc4';
console.log(yearMap[1]);
console.log(yearMap['2']);
console.log(yearMap[3]);
console.log(yearMap[4]);

function makeArray<T>(defaultValue: T, size: number): T[] {
    const arr: T[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>('empty', 10);
const arr3 = makeArray(1, 10);
const arr4 = makeArray('empty', 10);

class Stack<D> {
    private items: D[] = [];
    push(item: D) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}

interface Person1 {
    name: string;
    age: number;
}
interface Person1Optional {
    name?: string;
    age?: number;
}
interface Person1ReadOnly {
    readonly name: string;
    readonly age: number;
}
type T1 = { [K in 'prop1' | 'prop2']: boolean };
const t1: T1 = {prop1: true, prop2: true};
t1.prop1 = false;
t1.prop2 = false;

type MakeBoolean<T> = { [P in keyof T]?: boolean};
const pMap: MakeBoolean<Person1> = {};
pMap.name = true;
pMap.age = false;

type T2 = Person1['name'];
const sT: T2 = '문자타입';


type IsStringType<T> = T extends string ? 'yes' : 'no';
type T3 = IsStringType<string>;
type T4 = IsStringType<number>;
const t3: T3 = 'yes';
const t4: T4 =  'no';

