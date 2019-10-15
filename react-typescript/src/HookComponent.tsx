import React, { useState, useEffect } from "react";

function Profile() {
    // const [name, setName] = useState('');
    const [state, setState] = useState({name: '', age: 0});
    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input type="text" value={state.name} 
                onChange={e => setState({...state, name: e.target.value})}/>
            <input type="number" value={state.age} 
                onChange={e => setState({...state, age: parseInt(e.target.value)})}/>
        </div>
    );
}

export function My3Component() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `업데이트 횟수: ${count}`;
    });
    return <button onClick={() => setCount(count+1)}>increase</button>;
}

function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return <div>{`width is ${width}`}</div>;
}