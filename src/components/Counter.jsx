import { useState } from "react"

const Counter = () => {
  
  const [count, setCount] = useState(0);
   
  return (
    <div>
      <div>
        <p>{count}</p>
        <div>
          <button>Increment</button>
          <button>Increment</button>
        </div>
      </div>
    </div>
  )
}

export default Counter