import {TableDeveloper} from "./TableDeveloper.js";
import {TablePerson} from "./TablePerson.js";
import {TableProduct} from "./TableProduct.js";

export function viewDeveloper(data)
{
  const tableId = "developer";
  const name = "Developer";
  const className = "customers";
  new TableDeveloper(tableId, name, className, data);
}

export function viewPerson(data)
{
  const tableId = "person";
  const name = "Persons";
  const className = "customers";
  new TablePerson(tableId, name, className, data);
}

export function viewProduct(data)
{
  const tableId = "product";
  const name = "Products";
  const className = "customers";
  new TableProduct(tableId, name, className, data);
}
