'use client'

import { useState } from "react";

export default function Page() {
    const [x, setX] = useState(0);
    const handleclick = () => {
        setX(x + 1);
    };
    return (
        <div>
            <button type="button" onClick={() => handleclick()}>Click</button>
            <p>X = {x}</p>
            
        </div>
    );
    }