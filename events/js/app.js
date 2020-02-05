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


const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');


// устанавливаем событие на кнопку
btn.addEventListener('click', e => {
  //  e.stopPropagation();
  console.log('click btn');
});



// устанавливаем событие на обертку, которая будет реагировать на всплытие
wrap.addEventListener('click', e => {
  console.log('click wrap');
});


// устанавливаем событие на обертку, которая будет реагировать на всплытие
document.body.addEventListener('click', e => {
  console.log('click body');
});


// устанавливаем обработчик, который будет реагировать на погружение
wrap.addEventListener('click', e => {
  console.log('click wrap');
}, 
  {capture: true},
);


// устанавливаем обработчик, который будет реагировать на погружение
document.body.addEventListener('click', e => {
  console.log('click body');
},
  {capture: true},
);