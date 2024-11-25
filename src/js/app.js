// Selecting html elements
const form = document.querySelector(".contact-app__form");
const firstnameInput = form.querySelector("[name='firstname']");
const lastnameInput = form.querySelector("[name='lastname']");
const phoneInput = form.querySelector("[name='phone-number']");
const addressInput = form.querySelector("[name='address']");
const submitButton = form.querySelector(".form__submit-button");

const contactList = document.querySelector(".contacts__list");

//Declaring variables

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

//Rendering contacts when the window is loading

document.addEventListener("DOMContentLoaded", () => renderContacts(contacts));

//Function for adding the contacts
const addContacts = (e) => {
  e.preventDefault();
  contactList.textContent = "";
  const contact = {
    id: Date.now(),
    contactFirstname: firstnameInput.value,
    contactLastname: lastnameInput.value,
    contactPhoneNumber: phoneInput.value,
    contactAddress: addressInput.value,
  };
  contacts.push(contact);
  storeContacts(contacts);
  renderContacts(contacts);
  console.log(contacts);
};

//Function for storing the contacts in localStorage
const storeContacts = (contactsArray) => {
  localStorage.setItem("contacts", JSON.stringify(contactsArray));
};
//Function for rendering the contacts on the dom
const renderContacts = (contactsArray) => {
  contactsArray.forEach((contact, index) => {
    //Create element
    const contactItem = document.createElement("li");
    const contactListNumber = document.createElement("span");
    const contactFullname = document.createElement("span");
    const contactPhoneNumber = document.createElement("span");
    const contactAddress = document.createElement("span");
    const contactTools = document.createElement("span");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    //Append elements
    contactList.append(contactItem);
    contactItem.append(
      contactListNumber,
      contactFullname,
      contactPhoneNumber,
      contactAddress,
      contactTools
    );
    contactTools.append(deleteButton, editButton);

    //Insert content into elements
    contactListNumber.textContent = `${index + 1}.`;
    contactFullname.textContent = `${contact.contactFirstname} ${contact.contactLastname}`;
    contactPhoneNumber.textContent = contact.contactPhoneNumber;
    contactAddress.textContent = contact.contactAddress;
    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    editButton.innerHTML = "<i class='fa-solid fa-pencil'></i>";

    //Adding class to elements
    contactItem.classList.add("contacts-container");
    contactListNumber.classList.add("contacts-item__list-number");
    contactFullname.classList.add("contacts-item__fullname");
    contactPhoneNumber.classList.add("contacts-item__phone");
    contactAddress.classList.add("contacts-item__address");
    contactTools.classList.add("contacts-item__controls");
  });
};

//Add event listener to the form

form.addEventListener("submit", addContacts);

console.log(contacts);
