import React, { useState } from "react";

const App = () => {
  // setup hooks
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // change the input and set the newName
  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  // and the newNumber
  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  // event handler when add button in clicked
  const addPerson = (e) => {
    // prevent page reload
    e.preventDefault();
    // create new person object to add
    const newPersonObject = { name: newName, number: newNumber };
    // check if this person already exist
    if (persons.some((person) => person.name === newPersonObject.name)) {
      window.alert(`${newName} already in Phonebook`);
    } else {
      // add person to phonebook
      setPersons(persons.concat(newPersonObject));
      setNewName("");
      setNewNumber("");
    }
  };
  console.log(persons);

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <form>
        <div className="input">
          Name: <input value={newName} onChange={handleNameInput} id="name" />
        </div>
        <div className="input">
          Number: <input value={newNumber} onChange={handleNumberInput} id="number" />
        </div>
        <div className="btn">
          <button type="submit" onClick={addPerson}>
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => (
            <li key={person.name}>
              {person.name}: <span>{person.number}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
