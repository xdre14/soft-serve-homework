// task 1

// class Circle {
//     constructor(x, y, r) {
//       this.x = x;
//       this.y = y;
//       this.r = r;
//     }
  
//     getLength() {
//       return 2 * Math.PI * this.r;
//     }
  
//     static getLengthByRadius(r) {
//       return 2 * Math.PI * r;
//     }
  
//     getCopy() {
//       return new Circle(this.x, this.y, this.r);
//     }
  
//     static getCircle(x, y, r) {
//       return new Circle(x, y, r);
//     }
  
//     isPointInside(pointX, pointY) {
//       return Math.sqrt((pointX - this.x) ** 2 + (pointY - this.y) ** 2) <= this.r;
//     }
  
//     toString() {
//       return `Circle with center at (${this.x}, ${this.y}) and radius ${this.r}`;
//     }
//   }

// //   task 2

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
//   }

// //   task 3

// class Person {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }
    
//     showFullName() {
//       console.log(`${this.surname} ${this.name}`);
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, surname, year) {
//       super(name, surname);
//       this.year = year;
//     }
    
//     showFullName(middleName) {
//       console.log(`${this.surname} ${this.name} ${middleName}`);
//     }
    
//     showCourse() {
//       let currentYear = new Date().getFullYear();
//       return currentYear - this.year + 1;
//     }
//   }

// //   task 4

// class Marker {
//     constructor(color, ink) {
//       this.color = color;
//       this.ink = ink;
//     }
  
//     print(text) {
//       let inkRequired = text.replace(/\s/g, '').length * 0.5;
//       if (this.ink >= inkRequired) {
//         console.log(`%c${text}`, `color: ${this.color}`);
//         this.ink -= inkRequired;
//       } else {
//         console.log('The marker is out of ink!');
//       }
//     }
//   }

//   class RefillableMarker extends Marker {
//     refill(inkAmount) {
//       this.ink += inkAmount;
//       if (this.ink > 100) {
//         this.ink = 100;
//       }
//     }
//   }

// // task 5 

// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//       this._experience = 1.2;
//     }
  
//     showSalary() {
//       const salary = this.dayRate * this.workingDays;
//       console.log(`${this.fullName} salary: ${salary}`);
//     }
  
//     showSalaryWithExperience() {
//       const salary = this.dayRate * this.workingDays * this._experience;
//       console.log(`${this.fullName} salary: ${salary}`);
//     }
  
//     get showExp() {
//       return this._experience;
//     }
  
//     set setExp(value) {
//       this._experience = value;
//     }
  
//     static sortSalary(...workers) {
//       workers.sort((a, b) => {
//         return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//       });
//       for (const worker of workers) {
//         console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
//       }
//     }
//   }
  
 
//   const worker1 = new Worker("Anton Turch", 21, 21);
//   console.log(worker1.fullName);
//   worker1.showSalary();
//   console.log("New experience: " + worker1.showExp);
//   worker1.showSalaryWithExperience();
//   worker1.setExp = 1.5;
//   console.log("New experience: " + worker1.showExp);
//   worker1.showSalaryWithExperience();
  
//   const worker2 = new Worker("Andrii Kr", 25, 22);
//   worker2.showSalaryWithExperience();
  
//   const worker3 = new Worker("Pavlo Pust", 29, 23);
//   worker3.showSalaryWithExperience();
  

//   Worker.sortSalary(worker1, worker2, worker3);