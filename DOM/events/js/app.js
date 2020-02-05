/**
 * Всплытие, мы можем зацепить, когда у нас одно и то же событие (например click) установлено на вложенный элемент и на его родителя.
 * 
 * e.stopPropagation() - специальный метод из объекта event для прекращения всплытия события.
 * 
 * Событие проходит 2 этапа:
 *  1. Погружение события
 *  2. Всплытия события
 * Погружение по умолчанию не отслеживается и не перехватывается в оброботчиках.
 */


// const btn = document.querySelector('.btn');
// const wrap = document.querySelector('.wrap');


// // устанавливаем событие на кнопку
// btn.addEventListener('click', e => {
//    e.stopPropagation();
//   console.log('click btn');
// });



// // устанавливаем событие на обертку, которая будет реагировать на всплытие
// wrap.addEventListener('click', e => {
//   console.log('click wrap');
// });


// // устанавливаем событие на обертку, которая будет реагировать на всплытие
// document.body.addEventListener('click', e => {
//   console.log('click body');
// });


// // устанавливаем обработчик, который будет реагировать на погружение
// wrap.addEventListener('click', e => {
//   console.log('click wrap');
// }, 
//   {capture: true},
// );


// // устанавливаем обработчик, который будет реагировать на погружение
// document.body.addEventListener('click', e => {
//   console.log('click body');
// },
//   {capture: true},
// );


// EXAMPLE

var html = document.documentElement;
var body = document.body;
var div = body.querySelector('div');
var ul = body.querySelector('ul');
var li = body.querySelector('li');
var pause = 300;

// Capture
html.addEventListener('click', callback, true);
body.addEventListener('click', callback, true);
div.addEventListener('click', callback, true);
html.addEventListener('click', callback, true);
ul.addEventListener('click', callback, true);
li.addEventListener('click', callback, true);
// Bubble
html.addEventListener('click', callback, false);
body.addEventListener('click', callback, false);
div.addEventListener('click', callback, false);
html.addEventListener('click', callback, false);
ul.addEventListener('click', callback, false);
li.addEventListener('click', callback, false);

function callback(event) {
  var ms = (event.timeout = event.timeout + pause || 0);
  var target = event.currentTarget;

  setTimeout(function() {
    target.classList.add('highlight');
    setTimeout(function() {
      target.classList.remove('highlight');
    }, pause);
  }, ms);
}