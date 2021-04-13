import { FC } from "react";
import ReactPaginate from "react-paginate";

interface IProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Paginate: FC<IProps> = ({ pageCount, onPageChange }) => {
  const handlePageChange = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={<i className="fas fa-chevron-left -ml-px"></i>}
      nextLabel={<i className="fas fa-chevron-right -mr-px"></i>}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      containerClassName={"flex pl-0 rounded list-none flex-wrap"}
      pageLinkClassName={
        "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-400 bg-white text-blue-500 outline-none"
      }
      activeLinkClassName={"active-paginate"}
      previousLinkClassName={
        "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-400 bg-white text-blue-500 outline-none"
      }
      nextLinkClassName={
        "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-400 bg-white text-blue-500 outline-none"
      }
    />
  );
};

export default Paginate;
