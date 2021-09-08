import { useState } from "react";
import "./style.css";
const FruitList = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(
      fruits.filter((fruit) => {
        return fruit.color === "red";
      })
    );
  };

  const totalPrice = fruits.reduce((acc, fruitAtual) => {
    return fruitAtual.price + acc;
  }, 0);

  return (
    <div>
      <div>Total preço = {totalPrice}</div>
      <ul>
        {fruits.map(({ name }, index) => (
          <li>{name}</li>
        ))}
      </ul>
      <button onClick={() => filterRedFruits()}>Exibir frutas vermelhas</button>
    </div>
  );
};

export default FruitList;
