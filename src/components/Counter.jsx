import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount((count = 0));
  }

  return (
    <div className="">
      <div>
        <h1 className="">{count}</h1>
        <div>
          <button onClick={resetCount}>Reset</button>
        </div>
        <div>
          <button className="" onClick={handleIncrement}>
            +
          </button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
