
import { NewTable } from "./NewTable.js";

export class TablePerson extends NewTable
{
  title(table, thead, theadtr)
  {
    this.titleColumn(theadtr, "id");
    this.titleColumn(theadtr, "name");
    thead.append(theadtr);
    table.append(thead);
  }
}
