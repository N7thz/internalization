"use client"

import { useState } from "react"

export const Couter = ({ dictionary }: {
    dictionary: {
        increment: string
        decrement: string
    }
}) => {

    const [count, setCount] = useState<number>(0)

    return (

        <p>
            client component: {" "}
            <button onClick={() => setCount(n => n - 1)}>
                {dictionary.decrement}
            </button>{" "}
            <span>{count}</span> {" "}
            <button onClick={() => setCount(n => n + 1)}>
                {dictionary.increment}
            </button>{" "}
        </p>
    )
}
