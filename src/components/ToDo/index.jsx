// Import
import React, { useState } from "react";
import MapList from "../MapList";

// Component
const ToDo = () => {
    // State
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    // Effect

    // Function
    
    // Return/render
    return (
        <>
            <input onChange={ (e) => setInput(e.target.value)}/>
            <button onClick={ () => setList((prev) => [...prev, input]) }>+</button>
            <ul>
                <MapList list={list}/>
            </ul>
        </>);
}

export default ToDo;