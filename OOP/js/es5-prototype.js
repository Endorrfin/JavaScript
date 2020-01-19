
// 'use strict';

/**
 * Что такое прототип?
 * Прототип - это свойство объектов, которое содержит свойство и методы своих родителей и родителей родителей вверх по цепочке.
 * В свою очередь прототип - это объект, содержащий все те же свойства и методы.
 * Прототип есть у любово объекта.
 * 
 * Зачем нужен prototype?
 * Он нужен для того, чтобы те экземпляры, которые порождаются от опеределенных классов имели общий доступ к их методам и свойствам.
 * При обращении к такому методу,  JS ищет такой метод внутри объекта, если не находит, то продолжает поиск внутри прототипа по цепочке прототипов.
 * 
 * Таким образом набор, необходимых методов можно не содержать в рамках каждого экземпляра, а в одном неком хранилище.
 */


// ======= создаем функцию-конструктор с параметрами и свойствами но без методов =======
function Product(brand, price, discount) {
  // 1. создается новый объект
  // 2. на этот объект устанавливается ссылка this 
  // 3. возвращает новый объект, при этом явно return не указывали

  // свойства
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}


const apple = new Product('Apple', 100, 15);
console.log(apple);
const samsung = new Product('Samsung', 200, 25);
console.log(samsung);
const lg = new Product('LG', 80, 10)
console.log(lg);


/**
 * Как записывать в прототип какие-либо методы?
 * Запишем функцию getPriceWithDiscount в прототип.
 */

 Product.prototype.getPriceWithDiscount = function() {
  return (this.price * (100 - this.discount)) / 100;
}

console.log(apple.getPriceWithDiscount()); // 85
console.log(samsung.getPriceWithDiscount()); // 150
console.log(lg.getPriceWithDiscount()); // 72


// Можем создать методы, которые позволяют устанавливать какие-то значения.
Product.prototype.setPrice = function(newPrice) {
  return this.price = newPrice;
}

// Проверяем, как это работает
apple.setPrice(500);
console.log(apple.getPriceWithDiscount()); // 425


