<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-004 : Merge Arrays

Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

## Problem Statement

- Write a function that takes two arrays of sorted numbers and combines them into one array as result.

- Please note that, empty arrays to be checked to avoid exception!

- Please take a look at the empty function and test code below:

```javascript
function mergeArrays(ArrayA, ArrayB) {
  // Write your code to combine the sorted arrays into sorted Result Array

    return ..[]; // name it whatever you like, result must be an array
}
// You can write additional helper functions as well.

/* *** Tests *** */
let desc = "with empty arrays";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array empty";
actual = mergeArrays([], [7, 8, 9]);
expected = [7, 8, 9];
assertDeepEqual(actual, expected, desc);

desc = "second array empty";
actual = mergeArrays([10, 11, 12], []);
expected = [10, 11, 12];
assertDeepEqual(actual, expected, desc);

desc = "arrays with same lengths";
actual = mergeArrays([12, 14, 16], [11, 13, 17]);
expected = [11, 12, 13, 14, 16, 17];
assertDeepEqual(actual, expected, desc);

desc = "arrays with different lengths";
actual = mergeArrays([22, 24, 26, 28], [21, 27]);
expected = [21, 22, 24, 26, 27, 28];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}
```

<center> ⌛ Happy Coding  ✍ </center>
