import { useState } from "react";

const Metodos = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  return (
    <div>
      <ul>
        {fruits.map(({ name }, index) => (
          <li>{name}</li>
        ))}
      </ul>
      <button>Exibição</button>
    </div>
  );
};

export default Metodos;
