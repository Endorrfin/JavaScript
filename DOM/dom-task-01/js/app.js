/**
 * 
 * 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
 * isParent(parent, child);
 * isParent(document.body.children[0], document.querySelector('mark'));
 * // true так как первый див является родительским элементом для mark
 * isParent(document.querySelector('ul'), document.querySelector('mark'));
 * // false так ul НЕ является родительским элементом для mark
 * Функция принимает только DOM объекты.
 * 
 * Будем искать является ли span родительским элементом.
 */


 const span = document.querySelector('span');
 const spanParent = document.querySelector('.parent-1');


// SOLUTION I Создаем функцию проверающую является ли paren родителем для child
// function isParent(parent, child) {
//   return parent === child.parentElement;
// }

// console.log(isParent(spanParent, span));


// SOLUTION II Создаем функцию проверающую является ли paren ближайшем родителем для child
 function isParent(parent, child) {
  let currentParent = child.parentElement; // parent-3
  let isParent = false;

  while(currentParent) {
    isParent = parent === currentParent; // false, false
    if(isParent) {
      currentParent = null;
    } else {
      currentParent = currentParent.parentElement; // parent-2, parent-1
    }
  }

  return isParent;
}

console.log(isParent(spanParent, span));