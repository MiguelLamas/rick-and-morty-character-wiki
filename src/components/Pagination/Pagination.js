import React from 'react'

// x in brackets below represents the previous value of the 'page number' and useState hook in App.js
// Increment + 1 for Next or Decrement - 1 for Previous
const Pagination = ({ pageNumber, setPageNumber }) => {
let next = () => {
    setPageNumber((x) => x + 1)
};
let prev = () => {
    // if on Page 1 it will stop function below decrementing into minus pages, 
    // and simply return Page 1, otherwise it will decrement.
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1)
};

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
        <button onClick={prev} className="btn btn-primary">Prev</button>
        <button onClick={next} className="btn btn-primary">Next</button>
    </div>
  )
}

export default Pagination
