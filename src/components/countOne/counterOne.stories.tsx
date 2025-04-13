import {Counter} from './counter/Counter.tsx';
import {SettingsWindow} from './setingsWindow/SettingsWindow.tsx';
import {useEffect, useState} from 'react';


export default {
    title: 'CounterOne',
    component: Counter, SettingsWindow
}


export const CounterOne = () => {
    const [error, setError] = useState<boolean>(false);
    console.log(error)
    const [editMode, setEditMode] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState<number>(minValue);
    useEffect(() => {setError(false)}, [])

    const incFunc = () => {
        // делать проверку if (count < maxValue)
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    const resetFunc = () => {
        setCount(minValue);
    }
    const addMinValue = ( MinValue:number)=> {
        console.log(MinValue)
        setCount(MinValue)
        setMinValue(MinValue)
    }
    const addMaxValue = (MaxValue:number)=> {
        console.log(MaxValue)
        setMaxValue(MaxValue)
    }




    return (
        <>
            <SettingsWindow error={error} setError={setError} setEditMode={setEditMode} maxValueState={maxValue} minValueState={minValue}  addMaxValue={addMaxValue}  addMinValue={addMinValue} />
            <Counter error={error} editMode={editMode} count={count} maxValue={maxValue}  minValue={minValue} incFunc={incFunc} resetFunc={resetFunc}/>
        </>
    )
}