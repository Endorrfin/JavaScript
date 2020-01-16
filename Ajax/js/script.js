// 'use strict';

/**
 * AJAX - позволяют делать запросы к серверу и общение с сервером без перезагрузки страницы при помощи javaScript
 * 
 * Для создания запроса в JS существует специальная фукнция конструктор XMLHttpRequest.
 * XMLHttpRequest позволяет создать экземпляр запроса, и потом с помощью этого экземпляра вызывать специальные методы для того, чтобы совершить запрос.
 * 
 * XMLHttpRequest возвращает нам на выходе объект, который и позволяет на создавать, отправлять, обрабатывать запросы.
 * 
 * ---------
 * 
 * Cross-Origin Resource Sharing (CORS) - он позволяет описать политику, или правила, как один сайт будет предоставлять доступ к данным другого сайта. 
 */

const btnGetPosts = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');



 // ============= GET =============
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


 // ============= POST =============
 function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
   xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
   xhr.addEventListener("load", () => {
     const response = JSON.parse(xhr.responseText)
     cb(response);
   });

   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  
   xhr.addEventListener("error", () => {
     console.log("error");
   });
  
   xhr.send(JSON.stringify(body));
 }

 function cardTemplate(post) {
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
  return card;
 }



 function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
    const card = cardTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
 }

 btnGetPosts.addEventListener('click', e => {
    // вызываем функцию и передаем в нее response
  getPosts(renderPosts);
});



btnAddPost.addEventListener('click', e => {
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  createPost(newPost, response => {
    const card = cardTemplate(response);
    container.insertAdjacentElement('afterbegin', card);
  });
});



 // ============= CORS =============
 function getGmail(cb) {

  const xhr = new XMLHttpRequest();
   xhr.open("GET", "http://gmail.com");
   xhr.addEventListener("load", () => {
     console.log(xhr.responseText);
   });

   xhr.addEventListener("error", () => {
     console.log('error')
   });
   
   xhr.send();
 }


