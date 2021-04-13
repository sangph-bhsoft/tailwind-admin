import { FC, useCallback } from "react";
import Select from "../../components/bases/Select";
import MainTable from "./components/MainTable";

const options = [
  {
    id: 1,
    value: "value 1",
  },
  {
    id: 2,
    value: "value 2",
  },
  {
    id: 3,
    value: "value 3",
  },
];

const ProductContainer: FC = () => {
  const handleDelete = useCallback((id: string | number) => {
    console.log(id);
  }, []);

  const handleEdit = useCallback((id: string | number) => {
    console.log(id);
  }, []);

  const handleView = useCallback((id: string | number) => {
    console.log(id);
  }, []);
  return (
    <div className=" bg-white rounded-lg h-screen py-3">
      <div className="grid grid-cols-3 gap-x-3 px-3">
        <Select
          options={options}
          labelField="value"
          valueField="id"
          values={[{ id: 1, value: "value 1" }]}
          onChange={(values) => console.log(values)}
        />
        <Select
          options={options}
          labelField="value"
          valueField="id"
          values={[{ id: 1, value: "value 1" }]}
          onChange={(values) => console.log(values)}
        />
        <Select
          options={options}
          labelField="value"
          valueField="id"
          values={[{ id: 1, value: "value 1" }]}
          onChange={(values) => console.log(values)}
        />
      </div>
      <div className="block w-full overflow-x-auto">
        <MainTable
          data={[
            {
              id: 1,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 2,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 3,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 4,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 1,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 2,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 3,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
            {
              id: 4,
              name: "addd",
              email: "assss",
              status: true,
              create_date: "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
            },
          ]}
          onDelete={handleDelete}
          onView={handleView}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
