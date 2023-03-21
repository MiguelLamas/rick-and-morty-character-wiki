import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className="input-group mb-3">
      <select 
      onChange = {(e) => setId(e.target.value)}
      className="form-select" id={name}>
        <option selected>Choose...</option>
        {[...Array(total).keys()].map((items) => {
          return (
            <option value={items + 1}>
              {name} - {items + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
