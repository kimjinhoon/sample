import { UnionRangeValidation } from './advancedType';
import { getEnumLength, isValidEnumValue, Fruit, Language } from './basicType';

let range: UnionRangeValidation = new UnionRangeValidation(1, 100);
console.log(range.IsInRange('10'));

console.log(getEnumLength(Fruit), getEnumLength(Language));