const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body: 
    'do something very important № 0001',
    title: 
    'Task-#1',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 
    'do something very important № 0002',
    title: 
    'Task-#2',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body: 
    'do something very important № 0003',
    title: 
    'Task-#3',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 
    'do something very important № 0004',
    title: 
    'Task-#4',
  },
  {
    _id: '5d2ca9e29c8b94995564788e0',
    completed: false,
    body: 
    'do something is not important № 0005',
    title: 
    'Task-#5',
  },
  {
    _id: '5d2ca9e29c8b94995567788e0',
    completed: true,
    body: 
    'do something not important № 0006',
    title: 
    'Task-#6',
  },
  {
    _id: '5c2ca9e29c8b94935564788e0',
    completed: false,
    body: 
    'do something very important № 0007',
    title: 
    'Task-#7',
  }
];

(function (arrOfTasks) {

  /**
   * Трансформируем массив объектов в объект объектов
   * Trnasform array of object in object of objects
   */

  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Element UI
  const listContainer = document.querySelector(
    '.tasks-list-section .list-group',
  );

  const form = document
  // const form = document.forms['addTask'];
  // const inputTitle = form.elements['title'];
  // const inputBody = form.elements['body'];




  // Events
  renderAllTasks(objOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeletehandler);
  // listContainer.addEventListener('click', );


  /**
   * display tasks on page
   */
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Передайте список задач");
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    );
    li.setAttribute('data-task-id', _id);

    const span = document.createElement('span');
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

    const article = document.createElement('p');
    article.textContent = body;
    article.classList.add('mt-2', 'w-100');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    
    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Пожалуйста введите title и body");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    // Add new task in DOM tree
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;

    return { ...newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Вы действительно хотите удалить задачу: ${title}`);
    if(!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml (confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }
})(tasks);

