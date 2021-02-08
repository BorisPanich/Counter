import React, {useState} from 'react';
import {ResultButton} from "../Buttons/ResultButton";
import s from '../App/App.module.css';

function App() {
    let [count, setCount] = useState<number>(0);

    function addCount() {
        let newCount = ++count;
        if (count <= 5) {
            setCount(newCount)
        }
    }

    const resetCount = () => {setCount(0)}

    return (
        <div className={s.App}>
            <ResultButton count={count}
                          addCountHandler={addCount}
                          resetCountHandler={resetCount}/>
        </div>
    );
}

export default App;
