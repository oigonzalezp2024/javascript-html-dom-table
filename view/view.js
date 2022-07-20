function viewDeveloper(data)
{
  tableId = "developer";
  name = "Developer";
  className = "customers";
  new TableDeveloper(tableId, name, className, data);
}

function viewPerson(data)
{
  tableId = "person";
  name = "Persons";
  className = "customers";
  new TablePerson(tableId, name, className, data);
}

function viewProduct(data)
{
  tableId = "product";
  name = "Products";
  className = "customers";
  new TableProduct(tableId, name, className, data);
}
