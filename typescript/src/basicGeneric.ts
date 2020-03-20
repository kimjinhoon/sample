export function initGeneric() {};

console.log("--generic1--");
function arrayConcat<T>(array1: T[], array2: T[]): T[] {
    return array1.concat(array2);
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let resultConcat = arrayConcat<number>(array1, array2);
console.log(resultConcat);

console.log("--generic2--");
function concat4<T extends string>(strs: T, strs2: T) {
    return strs + strs2;
}
console.log(concat4("abc", '123'));

console.log("--generic3--");
let mapArr: any[] = [];
function put<T, T2>(strs: T, strs2: T2): T;
function put(idx: any, str: any) {
    mapArr[idx] = str;
}
function get<T, T2>(idx: T): T2;
function get(idx: any): any {
    return mapArr[idx];
}
put<number, string>(1, 'hello');
console.log(get<number, string>(1));

console.log("--generic4--");
function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let numbersKeys = { one: 1, two: 2, three: 3};
console.log(getValue(numbersKeys, 'one'));

console.log("--generic5--");
interface IFilter<T> {
    unique(array: Array<T>): Array<T>;
}
class Filter<T> implements IFilter<T> {
    unique(array: Array<T>): Array<T> {
        return array.filter((v, i, array) => array.indexOf(v) === i);
    }
}
let myFilter = new Filter<string>();
let resultFilter = myFilter.unique(['a', 'b', 'c', 'a', 'b']);
console.log(resultFilter);

console.log("--generic6--");
let myMap: Map<number, string> = new Map<number, string>();
myMap.set(1, 'one');
myMap.set(2, 'two');
for (let v of myMap) {
    console.log(v);
}
console.log("--generic7--");
let mapIter = myMap[Symbol.iterator]();
console.log(mapIter.next().value);
console.log(mapIter.next().value);

console.log("--generic7--");
class ArrayList<T> {
    private arrayList: (T | number)[] = [];
    add(indexOrValue: T | number, value?: T) {
        if (value !== undefined) {
            if (typeof indexOrValue === 'number') {
                this.arrayList.splice(indexOrValue, 0, value);
            }
        } else {
            this.arrayList.push(indexOrValue);
        }
    }
    remove(index: number) {
        this.arrayList.splice(index, 1);
    }
    addAll(elements: T[]) {
        this.arrayList = [...this.arrayList, ...elements];
    }
    get(index: number): T | number {
        return this.arrayList[index];
    }
    clear() {
        this.arrayList = [];
    }
    isEmpty(): boolean {
        return this.arrayList.length === 0 ? true : false;
    }
    set(index: number, value: T) {
        this.arrayList[index] = value;
    }
    toArray(): (T | number)[] {
        return this.arrayList;
    }
    size(): number {
        return this.arrayList.length;
    }
}
let aList = new ArrayList<string>();
aList.add('a');
aList.add('b');
aList.add('c');
console.log('1번 add :', aList.toArray());
aList.add(1, 'hi');
console.log('2번 index로 add :', aList.toArray());
aList.remove(1);
console.log('3번 remove(1) :', aList.toArray());
aList.addAll(['d', 'e']);
console.log('4번 addAll :', aList.toArray());
console.log('5번 get(2) :', aList.get(2));
console.log('6번 size() :', aList.size());
aList.clear();
console.log('7번 size() :', aList.size());
if (aList.isEmpty()) {
    console.log('8번 empty!');
}


