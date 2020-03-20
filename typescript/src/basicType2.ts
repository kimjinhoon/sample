export function initbasicType(): void {}

let symbol = Symbol("sym");
console.log({symbol});

enum WeekDay1 { Mon, Tue, Wed, Thu = Tue + Wed };
let day1 = WeekDay1.Mon;
let day2 = WeekDay1["Tue"];
console.log(WeekDay1);
console.log({day1, day2});
console.log(typeof day1);
console.log(WeekDay1.Mon, WeekDay1[1], WeekDay1[WeekDay1.Wed]);

enum WeekDay3 { Mon = "Monday", Tue = "Tuesday" };
console.log(WeekDay3);

let testUndefined: undefined = undefined;
let testNull: null = null;
console.log(testUndefined, typeof testUndefined);
console.log(testNull, typeof testNull);
