import * as _ from 'underscore';

export function initTypesDef() {};

console.log('--typedef--');
let sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num }, 0);
console.log(sum);