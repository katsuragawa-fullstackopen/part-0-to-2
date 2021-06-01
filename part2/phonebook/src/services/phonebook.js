import axios from "axios";

const url = "http://localhost:3001/persons";

const getContacts = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const createContact = (contact) => {
  const request = axios.post(url, contact);
  return request.then((response) => response.data);
};

const deleteContact = (id) => {
  const request = axios.delete(`${url}/${id}`);
  return request;
};

const phonebookServices = { getContacts, createContact, deleteContact };

export default phonebookServices;
