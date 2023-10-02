import React, { useState, useEffect } from "react";
import "./App.css"; 

const LOCAL_STORAGE_KEY = "phonebook-data";

function App() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name,
      contact,
    };

    if (name.trim() && contact.trim()) {
      setList([...list, newItem]);
      setName("");
      setContact("");
    }
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div>
      <h1>Imenik</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit">Dodaj kontakt</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} - {item.contact}
            <button class="delete" onClick={() => handleDelete(item.id)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
