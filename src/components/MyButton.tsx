import { useState } from "react";
import classes from "./MyButton.module.css";

export function MyButton() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((p) => p + 1);
  }

  function handleDecrement() {
    setCounter((p) => p - 1);
  }

  return (
    <div className={classes.container}>
      <button onClick={handleDecrement} data-testid="btn-decrement">
        -
      </button>
      <h2 data-testid="counter-value">{counter}</h2>
      <button onClick={handleIncrement} data-testid="btn-increment">
        +
      </button>
    </div>
  );
}
