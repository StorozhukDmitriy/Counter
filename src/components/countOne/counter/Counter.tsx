import {Count} from '../count/Count.tsx';
import {Button} from '../button/Button.tsx';
import styles from './counter.module.css'
import {memo} from 'react';

type CounterProps = {
    error: boolean,
    editMode: boolean;
    resetFunc: () => void;
    incFunc: () => void;
    count: number;
    minValue: number
    maxValue: number

}

export const Counter = memo( ({resetFunc, incFunc, minValue, maxValue, count, editMode,error}: CounterProps) => {
    return (
        <div className={styles.counterWrapper}>
            {editMode ? (!error?<div className={styles.countInfo}>enter values and press 'set'</div> : <div className={styles.countInfo + ' ' + styles.countInfoError}>Incorrect value!</div>) :
                <Count className={styles.count + " " + (count === maxValue && count > 0 ? styles.countMax : '')}
                       count={count}/>}

            <div className={styles.buttonWrapper}>
                <Button className={styles.button + " " + (count === maxValue || editMode? styles.disable : '')}
                        disabled={count === maxValue || editMode}
                        onClick={incFunc}>inc</Button>
                <Button className={styles.button + " " + (!count || count === minValue || editMode ? styles.disable : '')}
                        disabled={!count || count === minValue || editMode}
                        onClick={resetFunc}>reset</Button>
            </div>
        </div>
    );
});

