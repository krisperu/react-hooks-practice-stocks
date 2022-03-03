import React from "react";

function Stock({ name, price, onClickStock, id}) {

  function handleClick() { 
    onClickStock(id)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
