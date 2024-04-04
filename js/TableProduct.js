
import { NewTable } from "./NewTable.js";

export class TableProduct extends NewTable
{
  title(table, thead, theadtr)
  {
    this.titleColumn(theadtr, "id");
    this.titleColumn(theadtr, "product");
    this.titleColumn(theadtr, "cost");
    thead.append(theadtr);
    table.append(thead);
  }
}
