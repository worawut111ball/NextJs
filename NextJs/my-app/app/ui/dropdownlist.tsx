'use client';
import { useState } from "react";

// export default function DropdownList() {
//     const [food,setFood] = useState('apple');
//     return (
//         <>
//         <select onChange={(e) => setFood(e.target.value)}>
//             <option value="apple">apple</option>
//             <option value="banana">banana</option>
//             <option value="orange">orange</option>
//         </select>
//         <div>Food selected : {food}</div>
//         </>
//     );
// }



export default function DropdownList() {
    const [food,setFood] = useState([
       { name:'apple'},
        { name:'banana'},
        { name:'orange'},
        {name:'grape'}
        ]);
        const [count,setCount] = useState("apple");
    return (
        <>
        <select onChange={(e) => setCount(e.target.value)}>
            {food.map((item) => (
                <option value={item.name}>{item.name}</option>
            ))}
        </select>
        <div>Food selected : {count}</div>
        </>
    );
}