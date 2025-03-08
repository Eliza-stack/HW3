import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
    )
}

export default Counter; 