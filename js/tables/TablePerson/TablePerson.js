class TablePerson extends NewTable
{
  title(table, thead, theadtr, data)
  {
    this.titleColumn(theadtr, "id");
    this.titleColumn(theadtr, "name");
    thead.append(theadtr);
    table.append(thead);
  }
}
