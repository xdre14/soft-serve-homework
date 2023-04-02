// task 1

// function sumSliceArray(arr, first, second) {
//         if (typeof first !== "number" || typeof second !== "number") {
//         throw new Error("Перші два аргументи мають бути числами!");
//         }        
//         if (first >= second) {
//         throw new Error();
//         } if (first >= arr.length || second >= arr.length) {
//       throw new Error();
//     } let sum = 0;
//     for (let i = first; i <= second; i++) {
//       sum += arr[i];
//     }
    
//     return sum;
//   }
 
//   const arr = [1, 2, 3, 4, 5, 6];
//   try {
//     const result = sumSliceArray(arr, 2, 4);
//     console.log(result); 
//   } catch (error) {
//     console.error(error.message);
//   }

// //   task 2

// function checkAge() {
//   let name = prompt("Please enter your name");
//   let ageInput = prompt("Please enter your age");
//   let status = prompt("Please enter your status (admin, moderator, or user)");

//   try {
//     if (!name || !ageInput || !status) {
//       throw new Error("The field is empty! Please enter your age");
//     }

//     let age = parseInt(ageInput);
//     if (isNaN(age)) {
//       throw new TypeError("Age should be a number");
//     }

//     if (age < 18 || age > 70) {
//       throw new RangeError("You are not allowed to watch the movie");
//     }

//     if (status !== "admin" && status !== "moderator" && status !== "user") {
//       throw new EvalError("Invalid status");
//     }

//     alert(`Welcome ${name}! You can watch the movie.`);
//   } catch (error) {
//     alert(`Error: ${error.name}. ${error.message}`);
//   }
// }

// // task 3 
// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//       throw new TypeError('Both parameters must be numbers');
//     }  
//     return width * height;
//   }
//   try {
//     const width = parseFloat(prompt('Enter rectangle width:'));
//     const height = parseFloat(prompt('Enter rectangle height:'));
  
//     const area = calcRectangleArea(width, height);
//     alert(`The area of the rectangle is ${area}`);
//   } catch (e) {
//     alert(`An error occurred: ${e.message}`);
//   }

// //   task 4 
// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }
  
//   function showMonthName(month) {
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
//                         'July', 'August', 'September', 'October', 'November', 'December'];
//     if (month < 1 || month > 12) {
//       throw new MonthException('Not month number!');
//     }
//     return monthNames[month - 1];
//   }
  
//   try {
//     console.log(showMonthName(5));
//     console.log(showMonthName(14));
//   } catch (e) {
//     if (e instanceof MonthException) {
//       console.log(e.name, e.message);
//     } else {
//       throw e;
//     }
//   }

// //   task 5

// class NegativeIdError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'NegativeIdError';
//     }
//   }
  
//   function showUser(id) {
//     if (id < 0) {
//       throw new NegativeIdError('ID must not be negative: ' + id);
//     }
//     return { id: id };
//   }
  
//   function showUsers(ids) {
//     const users = [];
//     for (let i = 0; i < ids.length; i++) {
//       try {
//         users.push(showUser(ids[i]));
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     return users;
//   }
  
//   console.log(showUsers([7, -12, 44, 22]));