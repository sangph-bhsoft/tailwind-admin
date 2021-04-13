import { FC, useMemo } from "react";
import { Column } from "react-table";
import TableAction from "../../../components/bases/TableAction";
import CustomTable from "../../../components/CustomTable";
import Tools from "../../../helper/Tools";
import { columns } from "../data";

interface IProps {
  data: Record<string, unknown>[];
  onDelete: (id: string | number) => void;
  onEdit: (id: string | number) => void;
  onView: (id: string | number) => void;
}

const MainTable: FC<IProps> = ({ data, onView, onEdit, onDelete }) => {
  const tableColumns: Column<Record<string, unknown>>[] = useMemo(() => {
    const newColumns = columns.map((col) => {
      return {
        Header: col.title,
        accessor: col.key,
        Cell: (info: any) => {
          const row = info.row.original;
          return Tools.formatTableData(col, row);
        },
      };
    });
    return [
      ...newColumns,
      {
        Header: "Action",
        accessor: "action",
        Cell: (info: any) => {
          const row = info.row.original;
          return (
            <TableAction
              onDelete={() => onDelete(row.id)}
              onView={() => onView(row.id)}
              onEdit={() => onEdit(row.id)}
            />
          );
        },
      },
    ];
  }, [onDelete, onView, onEdit]);
  return <CustomTable columns={tableColumns} data={data} />;
};

export default MainTable;
