
import { NewTable } from "./NewTable.js";

export class TableDeveloper extends NewTable
{
  title(table, thead, theadtr)
  {
    this.titleColumn(theadtr, "developer");
    this.titleColumn(theadtr, "phone");
    thead.append(theadtr);
    table.append(thead);
  }
}
