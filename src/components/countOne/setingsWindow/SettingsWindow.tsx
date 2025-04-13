import Input from '../Input/Input.tsx';
import {Button} from '../button/Button.tsx';
import {memo, useEffect, useState} from 'react';
import styles from './SetIngsWindow.module.css'

type SettingsWindowType = {
    error: boolean,
    setError: (error: boolean) => void;
    setEditMode: (newMode: boolean) => void;
    setAppMaxValue: (maxValue: number) => void;
    setAppMinValue: (MinValue: number) => void
    setCount: (Count: number) => void;
    maxValueState: number
    minValueState: number
}

export const SettingsWindow = memo(({
                                        setAppMaxValue,
                                        setCount,
                                        setAppMinValue,
                                        maxValueState,
                                        minValueState,
                                        setEditMode,
                                        setError,
                                        error
                                    }: SettingsWindowType) => {

    const [MinValue, setMinValue] = useState(() => {
        return Number(localStorage.getItem('min'));
    });
    const [MaxValue, setMaxValue] = useState(() => {
        return Number(localStorage.getItem('max'));
    });

    useEffect(() => {
        localStorage.setItem('max', JSON.stringify(MaxValue));
    }, [MaxValue]);
    useEffect(() => {

        localStorage.setItem('min', JSON.stringify(MinValue))
    }, [MinValue]);

    useEffect(() => {
        const max = localStorage.getItem('max');
        if (max !== null) {
            const newCount = JSON.parse(max)
            setMaxValue(newCount);
        }
        const min = localStorage.getItem('min');
        if (min !== null) {
            const newCount = JSON.parse(min)
            setMinValue(newCount);
            setCount(newCount)
        }
        setEditMode(false)
    }, []);

    if (MaxValue !== maxValueState || MinValue !== minValueState) {
        setEditMode(true)
    }
    if (MaxValue <= MinValue) {
        setError(true)
    }
    //Функции поднимающие значения из input в локальный стейт
    const addMinValue = (value: number) => {
        setMinValue(value)
    }
    const addMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const addAllValuesInState = () => {
        if (MaxValue <= MinValue) {
            setError(true)
            return
        }
        setAppMinValue(MinValue)
        setCount(MinValue)
        setAppMaxValue(MaxValue)
        setEditMode(false)
    }


    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.inputWrapper}>
                <Input value={MaxValue} setEditMode={setEditMode} error={error} setError={setError} onChange={addMaxValue} label={'max value: '}/>
                <Input value={MinValue} setEditMode={setEditMode}  error={error} setError={setError} onChange={addMinValue} label={'min value: '}/>
            </div>
            <div className={styles.buttonWrapper}>
                <Button disabled={error || maxValueState === MaxValue && minValueState === MinValue}
                        className={styles.button + ' ' + (error || maxValueState === MaxValue && minValueState === MinValue ? styles.disable : '')}
                        onClick={addAllValuesInState}>set</Button>
            </div>
        </div>
    );
});

