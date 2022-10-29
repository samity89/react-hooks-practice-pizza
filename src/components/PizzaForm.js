import React from "react";

function PizzaForm({ id, topping, vegetarian, size, setEditPizza, updatePizza}) {

  const handleChange = (e) => {
    e.preventDefault()
    setEditPizza((previousPizza) => {
      if (e.target.name === "vegetarian") {
        return {
          ...previousPizza,
          [e.target.name]: e.target.value === "Vegetarian" ? true : false,
        };
      } else {
      return {
        ...previousPizza,
        [e.target.name]: e.target.value,
      };
    }
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id,
        topping,
        size,
        vegetarian,
      })
    })
      .then(resp => resp.json())
      .then((newPizza) => (updatePizza(newPizza)))

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian && true}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian && true}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
