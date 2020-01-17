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

// ======= async await I =======
// async function getPost(id) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
//   );
//   console.log(response);
// }


// getPost(1);




// ======= async await II =======
// async function getPost(id) {
//   const response = await fetch(
//      `https://jsonplaceholder.typicode.com/posts/${id}`,
//   );
  
//   const data = await response.json();
//   return data;
// }

// getPost(1)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))




  // ======= async await III =======
// async function getPost(id) {
//   try {
//     const response1 = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     ).then(res => res.json());
//     const response2 = await fetch(
//       `https://jsonplaceholder.typicode.com/users`,
//     ).then(res => res.json());

//     return [response1, response2];
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// }

// getPost(1)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))





    // ======= async await & prmisAll =======
async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    ).then(res => res.json());

    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}

getAll ();