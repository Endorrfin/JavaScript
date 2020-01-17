
// 'use strict';

// === <<<--- SOME TEXT  --->>>  ===

/**
 * promise - позволяет организовать синхронный код таким образом, что он будет выполняться в некой последовательности, друг за другом, и гарантировано можно передавать результаты между цепочками, при этом есть уверенность что resolve или reject будет вызван лишь 1 раз и эти значение будут получены в цепочки than.
 * 
 * Ошибки можно отлавливать в методе catch. Метод catch в цепочке вызовов становиться самым последним.
 * Если, любой из than в цепочке вызовов выдаст ошибку - эта ошибка будет поймана в метод catch
 * 
 * Метод promise finally(), он ничего не принимает, но выполняется в любом случае, будь-то ошибка, будь-то успешное выполнение.
 * 
 * promiseAll - это специальные метод у promise, который позволяет выполнить несколько promise и получить в 1 than результат выполнение. 
 */

 // ======= Promise resolve =======
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Math.random()), 1000);
// });

// console.log(promise);
// promise
//   .then(x => {
//     console.log(x);
//     return x;
//   })
// .then(y => console.log(y))
// .catch(err => console.log(err));

// promise.then(z => console.log(z));



 // ======= Promise reject =======
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('error'), 1000);
});

console.log(promise2);
promise2
  .then(x => {
    console.log(x);
    return x;
  })
.then(y => console.log(y))
.catch(err => console.log(err));