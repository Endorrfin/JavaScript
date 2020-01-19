
// 'use strict';

/**
 * Одними из фундаментальных вещей OOP являются: класс и конструктор.
 * Конструктур - это функция, которая служит шаблоном для постоения объектов.
 * Класс - это абстрактное понятие - характеризующее способ организации данных в единую структуру с набором свойств и методов для работы с этими данными и возможностью порождать новые экземпляры этих классов. 
 */

// создание объекта через литерал объекта
const person = {
  name: 'Bill',
  age: 58
}


/**
 * Что, если мы хотим создавать объекты из некоего шаблона.
 * Также объекты могут иметь наборы методов, какую-то логику.
 * Создавать каждый раз объект при этом - это не очень удобно.
 * Тут на помощь приходят функции-конструкторы. Это обычные функции, вызваные с оператором new
 */

// встроенные конструктуры в JS - для примитивных типов
 const str = new String('hello world')
   console.log(str);


// ======= создаем функцию-конструктор =======
 // function Product() {
 //   // 1. создается новый объект
 //   // 2. на этот объект устанавливается ссылка this 
 //   // 3. возвращает новый объект, при этом явно return не указывали
 //   this.brand = 'Apple';
 //   console.log(this); // Product {}
 // }


 // // const apple = Product();
 // const apple = new Product();
 // console.log(apple); // Product {}



// ======= создаем функцию-конструктор с параметрами =======
// function Product(brand) {
//   // 1. создается новый объект
//   // 2. на этот объект устанавливается ссылка this 
//   // 3. возвращает новый объект, при этом явно return не указывали
//   this.brand = brand;
// }


// const apple = new Product('Apple');
// console.log(apple); // Product {brand: "Apple"}
// const samsung = new Product('Samsung');
// console.log(samsung); // Product {brand: "Samsung"}
// const lg = new Product('LG')
// console.log(lg); // Product {brand: "LG"}





// ======= создаем функцию-конструктор с параметрами, свойствами и методом =======
function Product(brand, price, discount) {
 // 1. создается новый объект
 // 2. на этот объект устанавливается ссылка this 
 // 3. возвращает новый объект, при этом явно return не указывали

 // свойства
 this.brand = brand;
 this.price = price;
 this.discount = discount;

 // метод
 this.getPriceWithDiscount = function() {
   return (this.price * (100 - this.discount)) / 100;
 }
}


const apple = new Product('Apple', 100, 15);
console.log(apple); // Product {brand: "Apple", price: 100, discount: 15, getPriceWithDiscount: ƒ}
const samsung = new Product('Samsung', 200, 25);
console.log(samsung); // Product {brand: "Samsung", price: 200, discount: 25, getPriceWithDiscount: ƒ}
const lg = new Product('LG', 80, 10)
console.log(lg); // Product {brand: "LG", price: 80, discount: 10, getPriceWithDiscount: ƒ}

console.log(apple.getPriceWithDiscount()); // 85
console.log(samsung.getPriceWithDiscount()); // 150
console.log(lg.getPriceWithDiscount()); // 72

/**
* Таким образом создаются свойства и методы для функций-конструкторов.
* Такие фукнции-конструкторы в JS еще означают классами.
* 
* Что такое класс - это собственный тип данных для объектов. 
* Мы разделяем наше приложение на некую сущность и описываем эту сущность в форме объекта 
* Соответственно, для того, чтобы создать шаблон такого объекта и иметь возможность его тиражировать многократно, если в этом есть потребность нам нужна функция-конструктор и она является классом.
* Клас - это некий собственный тип данных, который имеет набор свойств и методов для работы с экземпляром этого класса.
* Экземпляром класса считаются порожденные объекты от этого класса - apple, samsung, lg
* 
* Для того, чтобы проверить, от какого класса был создан экземпляр, есть специальный оператор instanceof 
* apple instanceof Product // true
* lg instanceof Product // true
* [] instanceof Array // true
*/

