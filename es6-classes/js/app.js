
// 'use strict';


// +++++++ ES-6 +++++++
class ProductES {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  get brand() {
    return this._brand;
  }

  set brand(name) {
    this._brand = name;
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }

  setPrice (newPrice) {
    this.price = newPrice
  }
  

  /**
   * Классы ES-6 дают возможность создавать статические методы. 
   * Статические методы - это те методы, которые могут вызываться отдельно от инстранциации класса, отдельно от экземпляра, без его создания, они не имеют доступа к this.
   * static метод невозможно вызывать в экземпляре.
   */

   static plus(x, y) {
     return x + y;
   }
}


const newProduct = new ProductES('Bosch', 200, 10);
console.log(newProduct);
console.log(newProduct.getPriceWithDiscount()) //180

console.log(ProductES.plus(3,4)); // 7

/**
 * class Date - который дает возможность работать с датой
 * Это специальная функция-конструктор, которая дает возможность работать с датой.
 * В нем есть множество методов для получения года, месяца, для установки даты и т.д.
 * в class Date есть статический метода - называется null - он возвращает time stamp - момент времени.
 * Это число в милисекундах - сколько прошло времени от 1970 года 1-го января 00 часов 00 минут 00 секунд до сегодняшнего дня.
 * time stamp - позволяет решить погрешность обусловленную часовыми поясами.
 */



