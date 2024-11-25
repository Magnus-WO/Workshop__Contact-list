// Selecting html elements
const form = document.querySelector(".contact-app__form");
const firstnameInput = form.querySelector("[name='firstname']");
const lastnameInput = form.querySelector("[name='lastname']");
const phoneInput = form.querySelector("[name='phone-number']");
const addressInput = form.querySelector("[name='address']");
const submitButton = form.querySelector(".form__submit-button");

//Declaring variables

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const addContacts = (e) => {
  e.preventDefault();

  const contact = {
    id: Date.now(),
    contactFirstname: firstnameInput.value,
    contactLastname: lastnameInput.value,
    contactPhoneNumber: phoneInput.value,
    contactAddress: addressInput.value,
  };
  contacts.push(contact);
  storeContacts(contacts);
  console.log(contacts);
};

const storeContacts = (contactsArray) => {
  localStorage.setItem("contacts", JSON.stringify(contactsArray));
};

//Add event listener to the form
form.addEventListener("submit", addContacts);

console.log(contacts);
