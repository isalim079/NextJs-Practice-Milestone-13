"use client"

import Link from "next/link";
import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="">
            <h2 className="text-center">Counter: {counter}</h2>
            <button className="px-3 py-2 bg-green-700 text-white mr-5" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button className="px-3 py-2 bg-green-700 text-white " onClick={() => setCounter(counter - 1)}>Decrease</button>
            <Link href="/about" className="btn btn-success text-white ml-4">About</Link>
            <Link href="/news" className="btn btn-success text-white ml-4">News</Link>
        </div>
        </div>
    );
};

export default Counter;
