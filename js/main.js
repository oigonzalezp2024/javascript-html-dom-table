import {viewDeveloper, viewPerson, viewProduct} from "./view.js";

const developers = [
  {
    "developer" : "Óscar González",
    "phone" : "(+57)322-8858439"
  }
];

const persons = [
  {
    "id" : "1",
    "name" : "Martha"
  },
  {
    "id" : "2",
    "name" : "Manuel"
  },
  {
    "id" : "3",
    "name" : "Milena"
  }
];

const products = [
  {
    "id" : "1",
    "product" : "leche",
    "cost" : "1000"
  },
  {
    "id" : "2",
    "product" : "carne",
    "cost" : "2000"
  },
  {
    "id" : "3",
    "product" : "azucar",
    "cost" : "3000"
  }
];


document.addEventListener('DOMContentLoaded', ()=>{
  viewDeveloper(developers);
  viewPerson(persons);
  viewProduct(products);
});
