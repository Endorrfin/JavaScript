
// 'use strict';

// === <<<--- SOME TEXT  --->>>  ===

/**
 * fetch - это новый стандарт для AJAX запросов, который используют promise.
 * 
 * let promise = fetch(url, [options])
 *    url – URL для отправки запроса.
 *    options – дополнительные параметры: метод, заголовки и так далее.
 * Без options это простой GET-запрос, скачивающий содержимое по адресу url.
 * 
response.text() – читает ответ и возвращает как обычный текст,
response.json() – декодирует ответ в формате JSON,
response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
response.blob() – возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. Мы рассмотрим и такой пример несколько позже.
 */

 // ======= fetch - how work fetch =======
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(posts => console.log(posts)) 
//   .catch(err => console.log(err));




// ======= fetch - option I =======
// function getPosts(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(response => response.json())
//       .then(post => resolve(post))
//       .catch(err => reject(err));
//   });
// } 

// // вызываем getPosts и передаем нужный id
// getPosts(1).then(post => console.log(post));




// ======= getPosts - option II =======
// function getPosts2(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
//     response => response.json(),
//   );
// }

// getPosts2(1)
//   .then(post => console.log(post))
//   .catch(err => console.log(err));




  // ======= getPosts - option III =======
// function getPosts3(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       response => response.json(),
//     );
//   });
// }

// getPosts3('user-1')
//   .then(post => console.log(post))
//   .catch(err => console.log(err));



