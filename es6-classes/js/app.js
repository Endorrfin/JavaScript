
// 'use strict';

// +++++++ JS inheritance in ES-6) +++++++
class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFulName () {
    return `${this.firstName} ${this.lastName}`;
  }
}


class CustomerES extends UserES {
  constructor(firstName, lastName, membership) {
    // для того, чтобы унаследовать свойства и методы родительского класса, в конструкторе нужно вызвать super и передать соответствующие аргументы
    super(firstName, lastName);
    this.membership = membership;
  }

  // getFullName() {
  //   console.log('new get full name method');
  //   console.log(super.getFulName()); //  Philip Morris
  // }

  getFullName () {
    const parentRes = super.getFulName();
    return `${parentRes}, membership ${this.membership}`
  }
}

const customerEs = new CustomerES('Philip', 'Morris', 'basic');
console.log(customerEs); // CustomerES {firstName: "Philip", lastName: "Morris", membership: "basic"}
console.log(customerEs.getFulName()); // Philip Morris
console.log(customerEs.getFulName()); // new get full name method


console.log(customerEs.getFullName()) // Philip Morris, membership basic





