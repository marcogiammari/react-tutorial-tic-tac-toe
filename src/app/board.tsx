'use client';

import { useState } from 'react';
function Square() {
    const [value, setValue] = useState<string | null>(null);

    function handleClick() {
        setValue('X');
    }

    return <button className="square bg-white" onClick={handleClick} >{value}</button>;
}


export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}