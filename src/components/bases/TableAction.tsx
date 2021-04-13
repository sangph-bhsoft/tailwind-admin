import React, { BaseSyntheticEvent, FC, useEffect, useRef } from "react";
import { createPopper } from "@popperjs/core";
import {
  showConfirmDeleteAction,
  closeConfirmDeleteAction,
} from "../../features/base/actions";
import { connect, ConnectedProps } from "react-redux";

const mapDispatch = {
  showConfirmDeleteAction,
  closeConfirmDeleteAction,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  onDelete: () => void;
  onEdit: () => void;
  onView: () => void;
};

const TableAction: FC<Props> = ({
  onDelete,
  onEdit,
  onView,
  showConfirmDeleteAction,
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef<HTMLAnchorElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);
  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "left-start",
      });
    }
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleDropdown = (e: MouseEvent) => {
    if (
      btnDropdownRef.current !== e.target &&
      btnDropdownRef.current?.children[0] !== e.target
    ) {
      setDropdownPopoverShow(false);
    }
  };

  const handleDelete = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    showConfirmDeleteAction(onDelete);
  };

  const handleEdit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onEdit();
  };

  const handleView = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onView();
  };

  useEffect(() => {
    window.addEventListener("click", handleDropdown);
    return () => window.removeEventListener("click", handleDropdown);
  }, []);

  return (
    <>
      <a
        className="text-gray-600 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={handleEdit}
        >
          <i className="fas fa-edit text-red-400"></i>
          <span className="ml-2">Edit</span>
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={handleView}
        >
          <i className="fas fa-eye text-gray-500"></i>
          <span className="ml-2">View</span>
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={handleDelete}
        >
          <i className="fas fa-trash text-red-600"></i>
          <span className="ml-2">Delete</span>
        </a>
      </div>
    </>
  );
};

export default connector(TableAction);
