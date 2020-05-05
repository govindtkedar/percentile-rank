Calculate a percentile rank/range for given array of values.

## Install

```sh
npm install percentile-range
```

## Usage

```js
// Example
const percentileRange = require("percentile-range");

let list = [10, 57, 33, 70, 44, 15, 20, 60];

console.log(percentileRange(57, list)); // 82 th percentile


// With array of percentiles
const percentileRange = require("percentile-range");

let list = [10, 57, 33, 70, 44, 15, 20, 60];

// calculates percentile of score: 57, 33 and 70 in one pass
const result = percentileRange([57, 33, 70], list);

console.log(result); // [ 82, 48, 100 ]


// Example using array object
const percentileRange = require("percentile-range");
let list = [
    { name: 'xyz', score: 10 }, { name: 'xyz', score: 57 },
    { name: 'xyz', score: 33 }, { name: 'xyz', score: 70 },
    { name: 'xyz', score: 44 }, { name: 'xyz', score: 15 },
    { name: 'xyz', score: 20 }, { name: 'xyz', score: 60 }
];
// function to extract a value from an object
const result = percentileRange(57, list, list => list.score);

console.log(result); // 82 th percentile

```

## Author

Govind TK https://github.com/govindtkedar

## Credits
+ Treesa, Raneesh, Jerin
