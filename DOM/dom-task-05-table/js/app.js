/**
 *  6. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:
 * #
 * Name
 * E-mail
 * Balance
 * 
 * Условия:
 * В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
 * Количество пользователей может быть любым.
 * Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
 * В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

 */

// const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

 
const tableSchema = {
  index: '#',
  name: 'Name',
  email: 'Email',
  balance: 'Balance',
}


/**
 * DESCRIPTION OF STEPS
 *  1. Создание шапки таблицы
 *  2. Создание тела таблицы
 *  3. Создание Total balance
 */


 function generateThead(tableSchema) {
   const thead = document.createElement('thead');
   const tr = generateTr(tableSchema, 'th');
   thead.appendChild(tr);
   return thead;
 }


 function generateTr(tableSchema, tagName = 'td') {
   const tr = document.createElement('tr')
   // Получаем из объекта все значения для схемы таблицы
   Object.values(tableSchema).forEach(val => {
     // На основе полученного значение через forEach создаем 1 td 
     const td = document.createElement(tagName);
     // добавляем в td содержание
     td.textContent = val; 
     // в tr, созданную раньше appendim td
     tr.appendChild(td);
   });
   console.log(tr);
   return tr;
 }


 function generateTbody(tableSchema, items) {
   const tbody = document.createElement('tbody');
   items.forEach((item, index) => {
     item.index = index + 1;
     const itemSchema = generateItemsSchema(tableSchema, item);
     const tr = generateTr(itemSchema, 'td');
     tbody.appendChild(tr);
    //  console.log(tr);
  });

  return tbody;
 }

// Собираем схему для каждого юзера по которой он должен создаваться.
 function generateItemsSchema(tableSchema, item) {
   const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
     if (key in item) {
       acc[key] = item[key];
     }

     return acc;
   }, {});

   return itemSchema;
   console.log(itemSchema);
 }



 function generateTableTemplate() {
   const table = document.createElement('table');
   table.classList.add('table');
   return table;
 }


 function generateTotalBalance(tableSchema, items) {
   const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
   const tr = document.createElement('tr');
   const td = document.createElement('td');
   const columnCounts = Object.keys(tableSchema).length;
   // добавляем шаблон td
   td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`);
   // добавляем 2 атрибута на td
   // 1-й атрибут colspan - позволяет растянуть td на количество колонок, которое нужно
   td.setAttribute('colspan', columnCounts);
   // 2-й атрибут align - позволяет выровнять содержимое ячейки
   td.setAttribute('align', 'right');

   // добавляем tr в td
   tr.appendChild(td);

   return tr;
 }


 function initTable(tableSchema, items) {
   const container = document.querySelector('.table-container');
   const table = generateTableTemplate();
   console.log(table)
   const header = generateThead(tableSchema);
   const body = generateTbody(tableSchema, items);
   const total = generateTotalBalance(tableSchema, items);


   table.appendChild(header);
   table.appendChild(body);
   table.appendChild(total);

   container.appendChild(table);
 }


 initTable(tableSchema, users);












