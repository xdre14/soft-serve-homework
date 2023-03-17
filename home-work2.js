// // task 1
// let a = 12;
// let b = 15;
// let c =20;

// if (a < b && b < c) {
//   console.log(true)
// } else {
//   console.log(false)
// }
// // task 2
// let x = 1;
// let y = 2;

// let res1 = x + y.toString();
// console.log(res1); 
// console.log(typeof res1);

// let res2 = Boolean(x) + y.toString();
// console.log(res2); 
// console.log(typeof res2); 

// let res3 = Boolean(x + y);
// console.log(res3); 
// console.log(typeof res3); 

// let res4 = (x + y) / "zero";
// console.log(res4); 
// console.log(typeof res4); 

// // task3

// const isAdul = +prompt("are u adult ?")
// if (isAdul >= 18) {
//   console.log('Bи досягли повнолітнього віку')
// } else {
//   console.log('Ви ще надто молоді')
// }

// // task 4 
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let obj = {};
// for ( let i = 0; i < arr.length; i += 1) {
//     let num = arr[i];
//     obj[num]= obj[num] ? obj[num] + 1 : 1;
// }
// let int = 0;
// let data;
// for(let num in obj) {
//     if (obj[num] > int) {
//         int = obj[num];
//         data = num;
//     }
// }

// console.log(typeof data);
// data = parseInt(data);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== data) {
//         newArr.push(arr[i]);
//     }
// } 
// console.log(newArr);
// console.log(data);

// // task 5
// const firstSide = prompt("How much does the first slide  have?")
// const secondSide = prompt("How much does the second slide  have?")
// const thirdSide = prompt("How much does the third have?")

// const p = (firstSide + secondSide + thirdSide) / 2;
// const triangleSquare = Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide));
// console. log("It u Triangl Square " + triangleSquare.toFixed(3));

// if (firstSide ** 2 + secondSide ** 2 === thirdSide ** 2 || secondSide ** 2 + thirdSide ** 2 === firstSide ** 2 || firstSide ** 2 + thirdSide ** 2 ===  secondSide ** 2 ) {
//     console.log( ' Its a right triangle!!');
// } else {
//     console.log( ' Its NOT a right triangle!!');
// }

// // task 6

// const hour = ( new Date()). getHours();
// if( hour > 5 && hour < 11) console.log('Доброго ранку')
// else if(hour >= 11 && hour < 17) console.log('Доброго дня')
// else if(hour >= 17 && hour < 23) console.log('Доброго вечора')
// else console.log('Доброї ночі') 
