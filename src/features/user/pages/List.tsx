import { FC, useCallback } from "react";
import MainTable from "../components/MainTable";
import MainForm from "../components/MainForm";
import { useHistory } from "react-router-dom";
import Paginate from "../../../components/bases/Paginate";
import { RootState } from "../../../redux/interfaces";
import { connect, ConnectedProps } from "react-redux";
import { openSideModalAction, closeSideModalAction } from "../../base/actions";

const mapState = (state: RootState) => ({});

const mapDispatch = {
  openSideModalAction,
  closeSideModalAction,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const UserContainer: FC<Props> = ({
  openSideModalAction,
  closeSideModalAction,
}) => {
  const history = useHistory();
  const handleDelete = useCallback((id: string | number) => {
    console.log(id);
  }, []);

  const handleEdit = useCallback(
    (id: string | number) => {
      history.push({
        pathname: `/admin/user/edit/${id}`,
      });
    },
    [history]
  );

  const handleView = useCallback(
    (id: string | number) => {
      history.push({
        pathname: `/admin/user/view/${id}`,
      });
    },
    [history]
  );

  const handlePageChange = (page: number) => console.log(page);

  const handleAddUser = () => {
    openSideModalAction(
      <MainForm closeSideModalAction={closeSideModalAction} />
    );
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (true ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center justify-between">
            <div className="">
              <h3
                className={
                  "font-semibold text-lg " +
                  (true ? "text-gray-800" : "text-white")
                }
              >
                Card Tables
              </h3>
            </div>
            <div className="">
              <input className="py-2 border rounded-lg w-72 outline-none px-2 text-sm" />
              <button
                className="py-2 px-2 rounded-lg bg-primary text-white font-bold ml-2 outline-none focus:outline-none"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <MainTable
            data={[
              {
                id: 1,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 2,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 3,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 4,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 1,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 2,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 3,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
              {
                id: 4,
                name: "addd",
                email: "assss",
                status: true,
                create_date:
                  "Mon Feb 15 2021 17:58:53 GMT+0700 (Giờ Đông Dương)",
              },
            ]}
            onDelete={handleDelete}
            onView={handleView}
            onEdit={handleEdit}
          />
        </div>

        <div className="flex justify-between px-4 py-4 ">
          <div className="text-gray-400 text-sm">
            Showing 1 to 4 of 4 entries
          </div>
          <Paginate pageCount={10} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
};

export default connector(UserContainer);
