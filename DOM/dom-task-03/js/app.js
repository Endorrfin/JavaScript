/**
 * 
 *  1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
 * <ul>
 * <li><a href="#">Link1</a></li>
 * ...
 * <li class=”new-item”>item 5</li>
 * <li class=”new-item”>item 6</li>
 * </ul>
 * Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
 * 
 * Код для задач брать со слайда 4. 
 */


 const ul = document.querySelector('ul');
 const counts = 4 // хотим добавть 4 li к существующем списку
 const totalCounts = ul.children.length +  counts; // сколько будет всего li. Это нужно, чтоб знать как долго придется крутить цикл.

 for (let i = ul.children.length; i < totalCounts; i++) {
   // на каждой итерации создаем li
   const li = document.createElement('li');
   // каждой li по условию необходимо добавить class
   li.classList.add('new-item');
   // Записать текст item + текущее положение (порядковый номер данной li)
   li.textContent = `item ${i+1}`;
   // Добавляем li в конец списка
   ul.appendChild(li);
 }