//////////////////// Misol-1 ////////////////////
// class Triangle {
//     #leftSide;
//     #rightSide;
//     #width;

//     constructor(leftSide, rightSide, width) {
//       this.#leftSide = leftSide;
//       this.#rightSide = rightSide;
//       this.#width = width;
//     }

//     getLeftSide() {
//       return this.#leftSide;
//     }

//     getRightSide() {
//       return this.#rightSide;
//     }

//     getWidth() {
//       return this.#width;
//     }

//     setSides(a, b, c) {
//       this.#leftSide = a;
//       this.#rightSide = b;
//       this.#width = c;
//     }
//   }

//   let tr1 = new Triangle(3, 4, 5);
//   tr1.setSides(6, 8, 10);
//   console.log(tr1.getLeftSide());
//   console.log(tr1.getRightSide());
//   console.log(tr1.getWidth());

//////////////////// Misol-2 ////////////////////
// class Employ {
//   #id;
//   #firstName;
//   #LastName;
//   #Salary;

//   constructor(id, firstName, LastName, Salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#LastName = LastName;
//     this.#Salary = Salary;
//   }
//   getId() {
//     return this.#id;
//   }
//   getFirstname() {
//     return this.#firstName;
//   }
//   getlaastname() {
//     return this.#LastName;
//   }
//   getsalary() {
//     return this.#Salary;
//   }
//   setid(a) {
//     this.#id = a;
//   }
//   setfirstname(b) {
//     this.#firstName = b;
//   }
//   setlastname(c) {
//     this.#LastName = c;
//   }
//   setsalary(d) {
//     this.#Salary = d;
//   }
// }
// let tr = new Employ(2, 3, 5, 5);
// tr.setid(11);
// tr.setfirstname(12);
// tr.setlastname(15);
// tr.setsalary(18);
// console.log(tr);

//////////////////// Misol-3 ////////////////////

// class CustomDate {
//   #day;
//   #month;
//   #year;
//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }
//   getDay() {
//     return this.#day;
//   }
//   getMonth() {
//     return this.#month;
//   }
//   getYear() {
//     return this.#year;
//   }
//   setDay(a) {
//     this.#day = a;
//   }
//   setMonth(b) {
//     this.#month = b;
//   }
//   setYear(c) {
//     this.#year = c;
//   }
//   getISOdate() {
//     return `${this.#day <= 9 ? "0" + this.#day : this.#day}-${
//       this.#month <= 9 ? "0" + this.#month : this.#month
//     }-${this.#year}`;
//   }
// }

// let cd1 = new CustomDate(2, 2, 2023);

// cd1.setDay(6);
// cd1.setMonth(6);
// cd1.setYear(2022);
// console.log(cd1.getDay());
// console.log(cd1.getMonth());
// console.log(cd1.getYear());
// console.log(cd1.getISOdate());

//////////////////// Misol-4 ////////////////////
// class Time {
//   #hour;
//   #minute;
//   #secund;
//   constructor(hour, minute, second) {
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#secund = second;
//   }
//   getHour() {
//     return this.#hour;
//   }
//   getMinute() {
//     return this.#minute;
//   }
//   getSecond() {
//     return this.#secund;
//   }
//   setHour(a) {
//     this.#hour = a;
//   }
//   setMinute(b) {
//     this.#minute = b;
//   }
//   setSecond(c) {
//     this.#secund = c;
//   }
//   getISOdate() {
//     return `${this.#hour}-${this.#minute}-${this.#secund}`;
//   }
// }
// let res = new Time(22, 15, 4);
// res.setHour(12);
// res.setMinute(2);
// res.setSecond(22);
// console.log(res.getISOdate());
// console.log(res);

//////////////////// Misol-5 ////////////////////
// class Shape {
//   #color;
//   #filled;
//   constructor(color, filled) {
//     this.#color = color;
//     this.#filled = filled;
//   }
//   getColor() {
//     return this.#color;
//   }
//   setColor(newColor) {
//     this.#color = newColor;
//   }
//   isFilled() {
//     return this.#filled;
//   }
//   setFilled(a) {
//     this.#filled = a;
//   }
// }
// let sh1 = new Shape("red", true);
// sh1.setColor("green");
// sh1.setFilled(false);
// console.log(sh1.getColor());
// console.log(sh1.isFilled());

// class Circle extends Shape {
//   #radius;
//   constructor(radius, color, filled) {
//     super(color, filled);
//     this.#radius = radius;
//   }
//   getRadius() {
//     return this.#radius;
//   }
//   setRadius(newRadius) {
//     this.#radius = newRadius;
//   }
//   getArea() {
//     return Math.PI * this.#radius ** 2;
//   }
//   getPerimetr() {
//     return this.#radius * 2 * Math.PI;
//   }
// }
// let cir1 = new Circle(4, "red", false);
// cir1.setRadius(2);
// console.log(cir1.getColor());
// console.log(cir1.isFilled());
// console.log(cir1.getRadius());
// console.log(cir1.getArea());
// console.log(cir1.getPerimetr());

// class Rectangle extends Shape {
//   #width;
//   #height;
//   constructor(width, height, color, filled) {
//     super(color, filled);
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   getHeight() {
//     return this.#height;
//   }
//   setWidth(newWidth) {
//     this.#width = newWidth;
//   }
//   setHeight(newHeight) {
//     this.#height = newHeight;
//   }
//   getArea() {
//     return this.#height * this.#width;
//   }
//   getPerimetr() {
//     return (this.#height + this.#width) * 2;
//   }
// }
// const rec1 = new Rectangle(4, 5, "red", true);
// rec1.setHeight(6);
// rec1.setWidth(8);
// console.log(rec1.getArea());
// console.log(rec1.getPerimetr());
// console.log(rec1.getHeight());
// console.log(rec1.getWidth());

//////////////////// Misol-6 ////////////////////
// class Person {
//   #name;
//   #adress;
//   constructor(name, adress) {
//     this.#name = name;
//     this.#adress = adress;
//   }
//   getName() {
//     return this.#name;
//   }
//   setName(a) {
//     this.#name = a;
//   }
//   getAdress() {
//     return this.#adress;
//   }
//   setAdress(b) {
//     this.#adress = b;
//   }
// }
// let res1 = new Person("azizbek", 18);
// console.log(res1);

// class Student extends Person {
//   #faculty;
//   #year;
//   #university;
//   constructor(faculty, year, university, name, adress) {
//     super(name, adress);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }
//   getFaculty() {
//     return this.#faculty;
//   }
//   getYear() {
//     return this.#year;
//   }
//   getUniversity() {
//     return this.#university;
//   }
//   setFaculty(a) {
//     this.#faculty = a;
//   }
//   setYear(b) {
//     this.#year = b;
//   }
//   setUniversity(c) {
//     this.#university = c;
//   }
// }
// let res2 = new Student("no", 2022, "no", "azizbek", "mehnatobod18");
// res2.setYear(2007);
// console.log(res2);

// class Employee extends Person {
//   #salary;
//   #work;
//   constructor(salary, work, name, adress) {
//     super(name, adress);
//     this.#salary = salary;
//     this.#work = work;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   getWork() {
//     return this.#work;
//   }
//   setSalary(q) {
//     this.#salary = q;
//   }
//   setWork(w) {
//     this.#work = w;
//   }
// }
// let res3 = new Employee("1000$", "soft enginer", "Azizbek", "Toshkent");
// res3.setSalary("100000$");
// console.log(res3);

//////////////////// Misol-7 ////////////////////
// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }
// class Mammal extends Animal {
//   #legs;
//   constructor(legs, name, speed, weight) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }
//   getLegs() {
//     return this.#legs;
//   }
//   setLegs(a) {
//     this.#legs = a;
//   }
// }
// let mam1 = new Mammal(4, "cat", "20 km/h", "5 kg");
// console.log(mam1.getLegs());

// class Cat extends Mammal {
//   #sound;
//   constructor(legs, name, speed, weight, sound) {
//     super(legs, name, speed, weight);
//     this.#sound = sound;
//   }
//   getSound() {
//     return this.#sound;
//   }
// }
// let c1 = new Cat(4, "Cat", "20km/s", "3 kg", "Meow");
// console.log(c1.getSound());
// console.log(c1.getLegs());
// console.log(c1.name);

// class Dog extends Mammal {
//   #sound;
//   constructor(legs, name, speed, weight, sound) {
//     super(legs, name, speed, weight);
//     this.#sound = sound;
//   }
//   getSound() {
//     return this.#sound;
//   }
// }
// let d1 = new Cat(4, "Dog", "20km/s", "30 kg", "Woof");
// console.log(d1.getSound());
// console.log(d1.getLegs());
// console.log(d1.name);

// class Fish extends Animal {
//   #size;
//   constructor(size, name, speed, weight) {
//     super(name, speed, weight);
//     this.#size = size;
//   }
//   getSize() {
//     return this.#size;
//   }
//   setSize(a) {
//     this.#size = a;
//   }
// }
// let mam1 = new Fish("20m", "Whale", "20 km/h", "5t");
// console.log(mam1.getLegs());

// class Whale extends Fish {
//   #sound;
//   constructor(size, name, speed, weight, sound) {
//     super(size, name, speed, weight);
//     this.#sound = sound;
//   }
//   getSound() {
//     return this.#sound;
//   }
// }
// let w1 = new Whale("20m", "Whale", "20km/s", "5t", "Woof");
// console.log(w1.getSound());
// console.log(w1.getSize());
// console.log(w1.name);

// class Shark extends Fish {
//   #sound;
//   constructor(size, name, speed, weight, sound) {
//     super(size, name, speed, weight);
//     this.#sound = sound;
//   }
//   getSound() {
//     return this.#sound;
//   }
// }
// let sh1 = new Shark("10m", "Shake", "50km/h", "5t", "Woof");
// console.log(sh1.getSound());
// console.log(sh1.getSize());
// console.log(sh1.name);
// console.log(sh1.speed);
