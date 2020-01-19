
// 'use strict';

 /**
  * Object.create - это специальный метод, который позволяет создать новый объект с указанным объектом прототипа и свойствами.
  * 
  * В JS различают 2 наследования:
  * Функциональное наследование
  * Прототипное наследование
  * 
  * Метод call - дает возможность вызвать фукнцию с заданным контекстом
  */

  const protoForObj = {
    sayHello() {
      return "Hello world"
    }
  }

  const obj = Object.create(protoForObj, {
    firstName: {
      value: 'Bill',
    },
  });
  console.log(obj); // Object   __proto__:   sayHello: ƒ sayHello()   __proto__: Object
  console.log(obj.sayHello()); // Hello world

  const user = new User('Bill', 'Gates');



// ======= create class User =======
function User (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFulName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.seyHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

console.log(user); // User {firstName: "Bill", lastName: "Gates"}
console.log(user.getFulName()); // Bill Gates
console.log(user.seyHello()); // Hello Bill Gates



// ======= create class Customer --> extends User (functional inheritance) =======
function Customer (firstName, lastName, membership) {
  // User.call(this, firstName, lastName) // привязываем контекст с помощью метода apply
  User.apply(this, arguments); // если параметров много, можем применить apply и передать arguments

  // сохраняем membership
  this.membership = membership;
}


const customer = new Customer ('Elon', 'Musk', 'basic');
console.log(customer); // Customer {firstName: "Elon", lastName: "Musk"}
console.log(customer.sayHello); // UNDEFINED


// прототипное наследование: забираем прототип user в прототип customer
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMemberShip = function () {
  return this.membership.toUpperCase();
}

console.log(customer); // Customer {firstName: "Elon", lastName: "Musk"}
console.log(customer.getFulName); // undefined
console.log(customer.sayHello); // undefined

// console.log(customer.getMemberShip());



