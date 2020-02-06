/**
 * 
 * 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
 * -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
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


const p = document.querySelector('p');
// console.dir(p);

// Перобразовываем к массиву выполнив деструктуризацию при помощи оператора rest
const [...childNodes] = p.childNodes
console.log(childNodes);

childNodes.forEach(node => {
  if (node.nodeType === 3) {
    node.textContent = '-text-' 
  }
})
