import React from "react";
import ReactPaginate from "react-paginate";


const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-2"
      forcePage={pageNumber === 1? 0 : pageNumber -1}
      nextLabel="Next"
      previousLabel="Prev"
      nextclassNameName="btn btn-primary btn-active"
      previousclassNameName="btn btn-primary btn-active"
      previousLinkclassNameName="text-white"
      nextLinkclassNameName="text-white"
      pageclassNameName="page-item"
      pageLinkclassNameName="page-link"
      activeclassNameName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages} // if info? exists then add the .pages to it. pages == info.pages == 42
    />
  );
};

export default Pagination;
