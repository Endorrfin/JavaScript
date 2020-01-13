// 'use strict';

// === <<<--- What will show console.log?  --->>>  ===

const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: false,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  },
  {
    _id: "5cdbe6ce133de120d32d6fe4",
    index: 26,
    isActive: true,
    balance: 1899.99,
    age: 29,
    name: "Ray Woodly",
    gender: "male",
    company: "HP",
    email: "raywoodly@hp.com",
    phone: "+1 (852) 456-3171",
    registered: "2019-04-86B491:24:49 -03:00"
  }
];


// === <<<--- forEach  --->>>  ===
/**
 * Метод ничего не возврдащает.
 * Это более коротки способ перебрать массив, чем если перебирать его класическим for
 */
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// })


// === <<<--- filter --->>>  ===
/**
 * Получить список пользователей, чей возраст < 30 лет
 * Если результат вызова callback будет true, то элемент попадет в выборку.
 */
// const userLess30 = users.filter(user => user.age < 30);
//   console.log(userLess30);


/**
 * Выбрать только активных пользователей
 */
// const activeUser = users.filter(user => user.isActive === true);
// const activeUser = users.filter(user => user.isActive);
// console.log(activeUser);




// === <<<--- map --->>>  ===
/**
 * map позволяет получить новый массив.
 * Получить список имен.
 */
// const userName = users.map(user => user.name);
//   console.log(userName);

/**
 * Получить лишь список компаний
 */
// const userCompany = users.map(user => user.company);
//   console.log(userCompany);


  /**
 * получить список имен и возрастов
 */
// const userNameAge = users.map(user => ({name: user.name, age: user.age}));
// console.log(userNameAge);




// === <<<--- map --->>>  ===
/**
 * reduce - позволяет развернуть массив, превратить массив в какую-то другую сущность.
 * Позволяет что-то посчитать. Например посчитать баланс всех юзеров.
 */

// Option I
// const totalBalance = users.reduce((acc, user) => {
//   console.log(acc, user);
//   return acc += user.balance;
// },0);


// Option II
// const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalBalance);


// Option II
/**
 * формирование из массива объекта объектов
 */
// const userObj = users.reduce((acc, user) => {
//   acc[user._id] = user;
//   return acc
// }, {});
// console.log(userObj);


// === <<<--- some & every --->>>  ===
/**
 * some - возвращает true, если хотя бы для 1 элемента массива callback вернет true
 * ever - возвращает true, если для всех элементов массива callback вернет true
 */
const isMale = users.some((user) => user.gender === 'male ' );
  console.log(isMale); // true

const isFemale = users.every((user) => user.gender === 'female');
  console.log(isFemale); // false

const everyUserMore20 = users.every((user) => user.age >= 20);
  console.log(everyUserMore20); // true
