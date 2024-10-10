import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    let incCount = () => {
        setCount((currCount) => 
            currCount+1
        )
    }

    useEffect(function printSomething() {
        console.log("This is a side effect")
    }, [count])

    return (
            <div>
                <h1>Count = {count} </h1>
                <button onClick={incCount}>Inc Counter</button>
            </div>
    )
}