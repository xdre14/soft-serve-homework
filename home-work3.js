// task 1
const arr = [5, 3, 4, 5, 6, 7, 3];
function duplicates(arr) {
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (emptyArr.indexOf(arr[i]) === -1) {
        emptyArr.push(arr[i]);
      }
    }
    return emptyArr;
  }
  const emptyArr = duplicates(arr);
  console.log(emptyArr);
  

//   task 2
function endStart(start, end) {
    let myArr = [];
    for ( let i = start; i <= end; i++){
        arr.push(i);
  }
  return arr;
}
console.log(endStart (4, 12));
 

// task 3

function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let c = 0; c < i - a + 1; c++) {
        console.log(i);
      }
    }
  }
  console.log(printNumbers (4, 10));


  // task 4


  function randArray(k) {
  const arr = [];
  for (var i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}
randArray(5);

// task 5
let arr1 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

function arrType(arr1) {
  let result = [];
  let temp = {};

  // Iterate through the array and group the elements by their type
  for (let i = 0; i < arr1.length; i++) {
    let type = typeof arr1[i];
    if (!temp[type]) {
      temp[type] = [];
    }
    temp[type].push(arr[i]);
  }
  for (var type in temp) {
    result.push(temp[type]);
  }

  return result;
}

let arrNew = arrType(arr1);
console.log(arrNew);


// task 6

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}

// task 7

function findUnique(arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      return false;
    } else {
      count[arr[i]] = 1;
    }
  }
  return true;
}

findUnique([ 2, 4, 5, 5, 8]);
findUnique([ 2, 4, 3, 5, 8]);

