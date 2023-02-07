import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');
// console logs successful execution of the function
console.log("PUT to the database");
//creates varaibles for connection, transaction, and opening up the desired object store.
const jateDB = await openDB("jate", 1);
const tx = jateDB.transaction("jate", "readwrite");
const store = tx.objectStore("jate");
// using the put method to update data
const request = store.put({ id: 1, value: content});
//confirming request
const result = await request;
console.log("data saved to database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log("GET all from the database");
const jateDB = await openDB("jate", 1);
const tx = jateDB.transaction("jate", "readwrite");
const store = tx.objectStore("jate");
// request for the getall function
const request = store.getAll();
const result = await request;
// console log for data saying data retrieved or if it fails.
result
    ? console.log("Data retrieved from database")
    : console.log("Data not found in the database.");

  return result?.value;
}
initdb();
