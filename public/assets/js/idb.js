// This file establishes the IndexedDB database
// create a variable to hold the db connection
let db;
// establish a connection to IndexedDB database called 'pizza-hunt' and set it to version 1
const request = indexedDB.open('pizza_hunt', 1);

// this event will emit if the database version changes (nonexisten to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
  //save a reference to the database
  const db = event.target.result;
  //create an object store (table) called 'new_pizza', set it to ahve an auto incrementing primary key of sorts
  db.createObjectStore('new_pizza', { autoIncrement: true });
};

request.onsuccess = function (event) {
  // when db is successfully created with its object store (from onupgradeneeded even above) or simply established a connection, save reference to db in global variable
  db = event.target.result;

  // check if app is online, if yes, run uploadPizza() function to send all local db data to api
  if (navigator.online) {
    // uploadPizza();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// this function is executed if we attempt to submit a new pizza and no internet connection is available
function saveRecord(record) {
  // open a new transaction with the database with read and write permissions
  const transaction = db.transaction(['new-pizza'], 'readwrite');

  // access the object store for 'new-pizza'
  const pizzaObjectStore = transaction.objectStore('new_pizza');

  // add record to your store with add method
  pizzaObjectdStore.add(record);
}
