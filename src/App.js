import { useState } from 'react';
import './App.css';

function App(){
    const [count, setCount] = useState(99);
    const increment = () => {
        setCount(count + 1)
    }

    const [total, setTotal] = useState(0);
    const updateCount = () => {
        setTotal(total + 1);
    }

    return(
        <>
            <div>
                Show animals list
            </div>
            <span>{count}</span>
            <button type="button" onClick={increment}>Click me</button>

            <div className='mouse-game' onMouseMove={updateCount}>
                <center>
                    Enter the mouse here
                    <h4>{total}</h4>
                </center>
            </div>
        </>
    )
}

export default App;