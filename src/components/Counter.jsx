import { useState } from "react"

const Counter = () => {
  
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  function resetCount() {
    setCount(count = 0)
  }
   
   
  return (
    <div className="bg-slate-500">
      <div>
        <h1 className="bg-blue-500 text-white p-4">{count}</h1>
        <div>
          <button onClick={resetCount}>Reset</button>
        </div>
        <div>
          <button className="btn bg-black " onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Counter