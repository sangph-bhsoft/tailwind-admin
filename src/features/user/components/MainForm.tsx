import React from "react";

type Props = {
  closeSideModalAction: () => void;
};

const MainForm: React.FC<Props> = ({ closeSideModalAction }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-gray-200 px-4 py-4">
        <h1 className="text-sm text-gray-400 font-bold">Add New User</h1>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="flex w-full flex-col">
          <label className="text-sm text-gray-400 leading-none mb-2">
            Username
          </label>
          <input
            placeholder="username"
            className="px-2 py-2 border rounded-lg focus:border-blue-400 outline-none text-gray-400"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="text-sm text-gray-400 leading-none mb-2">
            Password
          </label>
          <input
            placeholder="password"
            className="px-2 py-2 border rounded-lg focus:border-blue-400 outline-none  text-gray-400"
          />
        </div>
        <div className="w-full flex space-x-2">
          <button className="bg-blue-400 text-white px-2 py-2 rounded-md outline-none focus:outline-none">
            Add User
          </button>
          <button
            className="bg-gray-400 text-white px-2 py-2 rounded-md outline-none focus:outline-none"
            onClick={closeSideModalAction}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
