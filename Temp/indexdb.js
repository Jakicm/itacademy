document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Open or create the IndexedDB database
    const dbPromise = window.indexedDB.open('TaskListDB', 1);
  
    dbPromise.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('task', 'task', { unique: false });
    };
  
    dbPromise.onsuccess = (event) => {
      const db = event.target.result;
      displayTasks(db);
    };
  
    addTaskBtn.addEventListener('click', () => {
      const task = taskInput.value.trim();
      if (task === '') return;
  
      const db = dbPromise.result;
      const transaction = db.transaction(['tasks'], 'readwrite');
      const objectStore = transaction.objectStore('tasks');
  
      const newTask = { task, timestamp: Date.now() };
  
      const request = objectStore.add(newTask);
  
      request.onsuccess = () => {
        displayTasks(db);
        taskInput.value = '';
      };
  
      transaction.oncomplete = () => {
        console.log('Task added to the database.');
      };
  
      transaction.onerror = (error) => {
        console.error('Error adding task:', error);
      };
    });
  
    function displayTasks(db) {
      const transaction = db.transaction(['tasks'], 'readonly');
      const objectStore = transaction.objectStore('tasks');
      const index = objectStore.index('task');
  
      const tasksList = document.getElementById('taskList');
      tasksList.innerHTML = '';
  
      index.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const taskItem = document.createElement('li');
          taskItem.textContent = cursor.value.task;
          tasksList.appendChild(taskItem);
          cursor.continue();
        }
      };
    }
  });
  