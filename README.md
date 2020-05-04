Calculate a Percentile Rank for given array of values.

## Install

```sh
npm install percentile-rank --save
```

## Usage

```js
// Example
const percentileRank = require("percentile-rank");
console.log(percentileRank(57, [10, 57, 33, 70, 44, 15, 20, 60])); // 82 th percentile rank

// Example using array object
const percentileRank = require("percentile-rank");
const result = percentileRank(
  57,
  [
    { name: 'xyz', score: 10 }, { name: 'xyz', score: 57 }, { name: 'xyz', score: 33 }, {name: 'xyz', score: 70 }, { name: 'xyz', score: 44 },{ name: 'xyz', score: 15 }, { name: 'xyz', score: 20 }, { name: 'xyz', score: 60 }
  ],
   // function to extract a value from an object
  list => list.score
);
console.log(result); // 82 th percentile rank

// With array of percentiles
const percentileRank = require("percentile-rank");
const result = percentileRank(
  [57, 33, 70], // calculates percentile rank of 57 mark, 33 mark and 70 mark in one pass
  [10, 57, 33, 70, 44, 15, 20, 60]
);
console.log(result); // [ 82, 48, 100 ]

```

## Author

Govind TK https://github.com/govindtkedar

