import React, {memo} from 'react';
import styles from './input.module.css'

type InputPropsType = {
    onChange: (value: number) => void;
    label: string;
    setError: (error: boolean) => void;
    error: boolean;
    value: number;
    setEditMode:(mode: boolean) => void;
}
const Input = memo(({onChange, label, setError, error, value,setEditMode}: InputPropsType) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber < 0) {
            setError(true);
            return
        }
        onChange(e.currentTarget.valueAsNumber);
        setError(false);
    }

    return <div className={styles.inputLabel}>
        <label className={styles.inputLabel}>{label}</label>
        <input onSelect={()=>{setEditMode(true)}}  value={value} className={styles.input + " " + (error ? styles.error : "")} type={'number'} onChange={onChangeHandler}/>
    </div>

})

export default Input;