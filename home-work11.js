// TASK 1
function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }

  getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
  });

//   TASK 2

function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          product *= arr[i];
        } else {
          reject("Error! Incorrect array!");
        }
      }
      resolve(product);
    });
  }

  calcArrProduct([3,4,5]).then(result => console.log(result)); 
    calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result))


    // TASK 3

    new Promise(function(resolve, reject) {
        let number = prompt("Enter a number:");
        if (isNaN(number)) {
          reject("Error! Input is not a number.");
        } else {
          resolve(number);
        }
      }).catch(function(error) {
        return new Promise(function(resolve, reject) {
          let number;
          do {
            number = prompt("Please enter a number:");
          } while (isNaN(number));
          resolve(number);
        });
      }).then(function(result) {
        console.log("The number is: " + result);
      });

      
    //   TASK 4

    const delay = async (i, time) => {
        await new Promise(resolve => setTimeout(resolve, time));
        console.log(i);
      };
      
      async function showNumbers() {
        for (let i = 0; i <= 10; i++) {
          await delay(i, Math.random() * 3000);
        }
      }
      
      showNumbers();