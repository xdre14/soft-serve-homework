// task 1

function upperCase(str) {
    const regex = /^[A-Z]/;
    if (regex.test(str)) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }

  console.log(upperCase("AscScas")); 
  console.log(upperCase("sccas")); 

//   task 2
function email(str) {
    const regex = /@/;
    return regex.test(str);
  }
  console.log(email("test@gmail.com")); 
  console.log(email("testgmail.com")); 

  // task 3 

  const str = "Java Script";
const regex = /(\w+)\s+(\w+)/;
const result = str.replace(regex, "$2, $1");
console.log(result); // "Script, Java"

// task 4

function validatetCardNumber(cardNumber) {
  const regex = /^(\d{4}-){3}\d{4}$/;
  return regex.test(cardNumber);
}

function validateForm() {
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNumber = cardNumberInput.value;
  const isValid = validateCardNumber(cardNumber);
  if (isValid) {
    prompt('Номер карти валідний!');
  } else {
    prompt('Номер карти не відповідає формату 9999-9999-9999-9999!');
  }
  return false;
}

// task 5

function checkEmail(email) {
  const regex = /^[A-Za-z0-9]+([_\.-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([\.-]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  if (regex.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}

console.log(checkEmail('qw_erl@gmail.com')); 
console.log(checkEmail('#qw_erg@gmail.com')); 
console.log(checkEmail('qwe_re--il@gmail.com')); 

// task 6

function checkLogin(login) {
  const numbers = login.match(/[0-9]+(?:\.[0-9]+)?/g);
  
  if (login.length < 2 || login.length > 10) {
    return false;
  }
  if (/^[0-9]/.test(login)) {
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(login)) {
    return false;
  }
  return numbers !== null;
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3')); 