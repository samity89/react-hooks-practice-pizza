import React from "react";

function Pizza( { id, topping, vegetarian, size, handleClick } ) {
  const sendIdToApp = () => {
    handleClick(id)

  }
  
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={sendIdToApp}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
