import React, {useState, useEffect} from "react";
function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    useEffect(() => {
        document.title = `count: ${count} ${color}`
    }, [count, color])
    function addCount(){
        setCount(c => c + 1);
    }
    function substractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === 'green'? 'red': 'green')
    }
    return(
        <div>
            <h3 style={{color: color}}>Count: {count}</h3>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>substract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
        
    )

}
export default MyComponent