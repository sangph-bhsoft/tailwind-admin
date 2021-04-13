import { FIELD_TYPE } from "./../../lib/constants";
import { ColumnInterface } from "../../interfaces/table";

export const columns: ColumnInterface[] = [
  {
    key: "name",
    title: "Name",
    type: FIELD_TYPE.STRING,
  },
  {
    key: "price",
    title: "Price",
    type: FIELD_TYPE.FLOAT,
  },
  {
    key: "status",
    title: "Status",
    type: FIELD_TYPE.BOOLEAN,
  },
];
