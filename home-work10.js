// TASK 1

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
    fifth: "Name №5"
  };
  
  let { first: f, third: x, ...rest } = names;
  
  console.log(f); // "Tom"
  console.log(x); // "Ray"
  console.log(rest.fifth); // "Name №5"

//   TASK 2
  
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let [, name2, , name4] = [...data.names];
  let [, age2, , age4] = [...data.ages];
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26

//   TASK 3

function mul(...args) {
    return args.reduce((acc, val) => {
      if (typeof val === "number") {
        return acc * val;
      }
      return acc;
    }, 0);
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0

//   TASK 4 

let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => {
        return this.data + "";
      });
    },
  };
  
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => {
        this.result = callback();
      };
    },
  };
  
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
  

//   TASK 5

function mapFunc(keysArray, valuesArray) {
    const map = new Map();
  
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArray[i]);
    }
  
    return map;
  }

  
  let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapFunc(keys, values);
console.log(map.size); 
console.log(map.get(2));

// TASK 6

let arr = [];

[0, 1, 2].forEach(function (i) {
   arr[i] = function () {
      console.log(i);
   };
});

arr[0](); // 0
arr[arr.length - 1](); // 2

