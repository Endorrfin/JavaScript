// 'use strict';

/**
 * AJAX - позволяют делать запросы к серверу и общение с сервером без перезагрузки страницы при помощи javaScript
 * 
 * Для создания запроса в JS существует специальная фукнция конструктор XMLHttpRequest.
 * XMLHttpRequest позволяет создать экземпляр запроса, и потом с помощью этого экземпляра вызывать специальные методы для того, чтобы совершить запрос.
 * 
 * XMLHttpRequest возвращает нам на выходе объект, который и позволяет на создавать, отправлять, обрабатывать запросы.
 */

const btn = document.querySelector('button');
const container = document.querySelector('.container');


 function getPosts(cb) {

  const xhr = new XMLHttpRequest();
  //  console.log(xhr);
  
   // открываем запрос
   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  
   // подписываемя на события получения данных от сервера
   xhr.addEventListener("load", () => {
     const response = JSON.parse(xhr.responseText)
    //  console.log(response);
     cb(response);
   });
  
   // подписываемся на события error
   xhr.addEventListener("error", () => {
     console.log("error");
   });
  
   // получаем данных от сервера
   xhr.send();
 }

 function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
    // console.log(cardBody)
  });
  container.appendChild(fragment);
 }

 btn.addEventListener('click', e => {
    // вызываем функцию и передаем в нее response
  getPosts(renderPosts);
});



