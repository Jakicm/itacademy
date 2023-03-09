import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getDatabase, ref, get, set, child, update, remove}
        from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

        const firebaseConfig = {
          apiKey: "AIzaSyBASUXjjXa6qUZbDKxTNwNJyNcCpzn1RVw",
          authDomain: "bodovi-89d51.firebaseapp.com",
          databaseURL: "https://bodovi-89d51-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "bodovi-89d51",
          storageBucket: "bodovi-89d51.appspot.com",
          messagingSenderId: "725302972793",
          appId: "1:725302972793:web:e65e49fb4b7bf35e061fa8"
        };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const peopleTable = document.querySelector("#peopleTable");

function listPeople() {
  get(ref(db, "People")).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const person = childSnapshot.val();
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const ageCell = document.createElement("td");
      idCell.textContent = person.ID;
      nameCell.textContent = person.Name;
      ageCell.textContent = person.Age;
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      peopleTable.appendChild(row);
    });
  });
}

listPeople();
