import {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/countOne/counter/Counter.tsx';
import {SettingsWindow} from './components/countOne/setingsWindow/SettingsWindow';


function App() {

    const [error, setError] = useState(false);
    const [editMode, setEditMode] = useState(true);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState(minValue);




    useEffect(() => {
         if (minValue >= maxValue){
             setError(true)
         }
        setError(false)
    }, [minValue, maxValue, count]);




    const incFunc = () => {

        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    const resetFunc = () => {
        setCount(minValue);
    }


    return (
        <div className="App">
            <SettingsWindow
                setAppMaxValue={setMaxValue}
                error={error}
                setError={setError}
                setEditMode={setEditMode}
                maxValueState={maxValue} minValueState={minValue}
                setCount={setCount} setAppMinValue={setMinValue}/>
            <Counter error={error} editMode={editMode} count={count} maxValue={maxValue} minValue={minValue}
                     incFunc={incFunc} resetFunc={resetFunc}/>
        </div>
    );
}

export default App;
