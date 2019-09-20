import { UnionRangeValidation } from './advancedType';

let range: UnionRangeValidation = new UnionRangeValidation(1, 100);
console.log(range.IsInRange('10'));

