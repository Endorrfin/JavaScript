
// 'use strict';

// === <<<--- SOME TEXT  --->>>  ===

/**
 * fetch - это новый стандарт для AJAX запросов, который используют promise.
 */

 // ======= fetch - how work fetch =======
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // console.log(response.json());
    return response.json();
  })
  .then(posts => console.log(posts)) 
  .catch(err => console.log(err));




