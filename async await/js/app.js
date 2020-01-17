
// 'use strict';

// === <<<--- SOME TEXT  --->>>  ===

/**
 * async await - это новый формат написания асинхронного кода.
 * Когда мы объявляем функцию с ключевым словом async, то async превращает эту функцию в такую, которая всегда будет возвращать promise.
 * 
 * Внутри функции мы можем использовать ключевое слово await, которое как бы замораживает наш код до выполнения асинхронного действия.
 */

// ======= async await - option I =======
// function getPosts(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       response => response.json(),
//     );
//   });
// }


async function getPost(id) {
  return 'someTest';
}



