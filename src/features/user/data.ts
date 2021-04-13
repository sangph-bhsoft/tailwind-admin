import { FIELD_TYPE } from "./../../lib/constants";
import { ColumnInterface } from "../../interfaces/table";

export const columns: ColumnInterface[] = [
  {
    key: "name",
    title: "Name",
    type: FIELD_TYPE.STRING,
  },
  {
    key: "email",
    title: "Email",
    type: FIELD_TYPE.STRING,
  },
  {
    key: "status",
    title: "Status",
    type: FIELD_TYPE.BOOLEAN,
  },
  {
    key: "create_date",
    title: "Create Date",
    type: FIELD_TYPE.DATE,
  },
];
