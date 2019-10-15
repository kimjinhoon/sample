export class RangeValidationBase {
    constructor(private start: number, private end: number) {}
    protected RangeCheck(value: number): boolean {
        return value >= this.start && value <= this.end;
    }
    protected GetNumber(value: string): number {
        return new Number(value).valueOf();
    }
}
export class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value: string | number): boolean {
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}

class Grid {
    Width: number = 1;
    Height: number = 2;
    Padding: number = 1;
}
class Margin {
    Left: number = 0;
    Top: number = 0;
    Width: number = 10;
    Height: number = 20;
    Padding?: number;
}
function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{...grid, ...margin};
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
type StringOrNumber = string | number;
class UnionRangeValidationWithTypaAlias extends RangeValidationBase {
    IsInRange(value : StringOrNumber): boolean {
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}

let cos = ConsolidatedGrid(new Grid(), new Margin());
console.log(cos);

let guitar = { manufacturer: 'Ibanez', type: 'Jem 777', strings: 6 };
let { manufacturer, type, strings } = guitar;

const instruments = [ 'Guitar', 'Violin', 'Oboe', 'Drums' ];
let [ gtr, violin, oboe, drums ] = instruments;





interface IDecoratorExample {
    AnyoneCanRun(args: string): void;
    AdminOnly(args: string): void;
}
class NoRoleCheck implements IDecoratorExample {
    AnyoneCanRun(args: string): void {
        console.log(args);
    }
    AdminOnly(args: string): void {
        console.log(args);
    }
}
let currentUser = {user: "peter", roles : [{role:"user"}] };
function IsInRole(role: string): boolean {
    return currentUser.roles.some(r => r.role === role);
}
function TestDecoratorExample(decoratorMethod : IDecoratorExample) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`);       
}
// TestDecoratorExample(new NoRoleCheck());

function Admin(target: any, propertyKey : string | symbol, descriptor : PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
        if (IsInRole('admin')) {
            originalMethod.apply(this, arguments);
            return;
        }
        console.log(`${currentUser.user} is not in the admin role`);
    }
    return descriptor;
}
class DecoratedExampleMethodDecoration implements IDecoratorExample {
    @Role('user')
    AnyoneCanRun(args: string): void {
        console.log(args);
    }
    @Role('admin')
    AdminOnly(args: string): void {
        console.log(args);
    }
}
function Role(role: string) {
    return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function() {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the admin role`);
        }
        return descriptor;
    }
} 

let dec: DecoratedExampleMethodDecoration = new DecoratedExampleMethodDecoration();
dec.AdminOnly('user');

class ActiveRecord {
    deleted = false;
}
class Person extends ActiveRecord {
    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    firstName: string;
    lastName: string;
}

type Constructor<T ={}> = new (...args: any[]) => T;
function RecordStatus<T extends Constructor>(base: T) {
    return class extends base {
        delete: boolean = false;
    }
}

class Queue<T> {
    private queue: T[] = [];

    public Push(value: T): void {
        this.queue.push(value);
    }
    public Pop(): T | undefined {
        return this.queue.shift();
    }
}

interface IStream {
    ReadStream(): Int8Array;
}
class Data<T extends IStream> {
    ReadStream(stream: T) {
        let output = stream.ReadStream();
        console.log(output.byteLength);
    }
}
class WebStream implements IStream {
    ReadStream(): Int8Array {
        let array : Int8Array = new Int8Array(8);
        for (let index : number = 0; index < array.length; index++){
            array[index] = index + 3; 
        }
        return array;
    }
}
class DiskStream implements IStream {
    ReadStream(): Int8Array {
        let array : Int8Array = new Int8Array(20); 
        for (let index : number = 0; index < array.length; index++){
            array[index] = index + 3;
        }
        return array;
    }
}
const webStream = new Data<WebStream>();
const diskStream = new Data<DiskStream>();
webStream.ReadStream(new WebStream());
diskStream.ReadStream(new DiskStream());

enum Genre {
    Rock,
    CountryAndWestern,
    Classical,
    Pop,
    HeavyMetal
}
class MusicCollection {
    private readonly collection: Map<Genre, string[]>;
    constructor() {
        this.collection = new Map<Genre, string[]>();
    }
}

function ExpensiveWebCall(time: number): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve, time));
}
class MyWebService {
    CallExpensiveWebOperation(): void {
        ExpensiveWebCall(4000).then(() => console.log('Finish web service'))
                            .catch(() => console.log('Expensive web call failure'));
    }
}

function* f1() {
    const data1 = yield;
    console.log('data1:', data1);
    const data2 = yield;
    console.log('data2:', data2);
}
const gen = f1();
gen.next();
gen.next(10);
gen.next(20);