import React, { useEffect, useState } from "react";
import phonebookServices from "./services/phonebook";

const Filter = ({ search, handleSearch }) => (
  <form>
    <div className="search-container">
      Filter with (name or number){" "}
      <input value={search} onChange={handleSearch} id="search" />
    </div>
  </form>
);

const Form = ({
  newName,
  handleNameInput,
  newNumber,
  handleNumberInput,
  addPerson,
}) => (
  <form>
    <div className="input">
      Name: <input value={newName} onChange={handleNameInput} id="name" />
    </div>
    <div className="input">
      Number:{" "}
      <input value={newNumber} onChange={handleNumberInput} id="number" />
    </div>
    <div className="btn">
      <button type="submit" onClick={addPerson}>
        Add
      </button>
    </div>
  </form>
);

const Persons = ({ persons, search }) => {
  // callback for filter
  const filterPerson = (person) =>
    person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    person.number.includes(search);
  return (
    <div>
      <ul>
        {/* show only persons compatible with the search */}
        {persons.filter(filterPerson).map((person) => (
          <li key={person.name}>
            {person.name}: <span>{person.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  // setup hooks
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    phonebookServices.getContacts().then((contacts) => setPersons(contacts));
  }, []);

  // change the input and set the newName
  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  // and the newNumber
  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  // change search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // event handler when add button in clicked
  const addPerson = (e) => {
    // prevent page reload
    e.preventDefault();
    // create new person object to add
    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    // check if this person already exist
    if (
      persons.some(
        (person) =>
          person.name.toLocaleLowerCase() ===
          newPersonObject.name.toLocaleLowerCase()
      )
    ) {
      // if it does, alert
      window.alert(`${newName} already in the Phonebook`);
    } else {
      // else, add person to phonebook database
      phonebookServices
        .createContact(newPersonObject)
        .then((createdContact) => {
          console.log(`Add new person: ${createdContact}`);
          setPersons(persons.concat(createdContact));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <Form
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
