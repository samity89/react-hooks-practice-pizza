import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzaData) => setPizzas(pizzaData))
  }, [])

const handleEditButtonClick = (id) => {
    const foundPizza = pizzas.find((pizza) => pizza.id === id)
    setEditPizza(foundPizza)
  };

const updatePizza = (newPizza) => {
  const newPizzaList = pizzas.map((pizza) => {
    if (pizza.id === newPizza.id) {
      return newPizza;
    } else {
      return pizza
    }
  })
  setPizzas(newPizzaList)
}
  
  return (
    <>
      <Header />
      <PizzaForm {...editPizza} setEditPizza={setEditPizza} updatePizza={updatePizza}/>
      <PizzaList pizzas={pizzas} handleClick={handleEditButtonClick} />
    </>
  );
}

export default App;
