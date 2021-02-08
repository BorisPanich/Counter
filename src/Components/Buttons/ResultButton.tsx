import React from 'react';
import s from '../App/App.module.css';
import {Buttons} from "./Buttons";
import {DisplayCount} from "../Display/DisplayCount";

type ButtonsPropsType = {
    addCountHandler: () => void
    resetCountHandler: () => void
    count: number
}

export const maxValue = 5

export function ResultButton(props: ButtonsPropsType) {

    return (
        <div className={s.wrapper}>
            <div className={s.displayCount}>
                <DisplayCount value={props.count} />
            </div>
            <div className={s.wrapperButton}>
                <Buttons title={'inc'}
                         onClick={props.addCountHandler}
                         disabled={props.count === maxValue ? true : false}
                />
                <Buttons title={'reset'}
                         onClick={props.resetCountHandler}
                         disabled={props.count === 0 ? true : false}
                />
            </div>
        </div>
    );
}

