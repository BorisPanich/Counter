import React from "react";
import {maxValue} from "../Buttons/ResultButton";
import s from '../App/App.module.css';

export type CountValuePropsType = {
    value: number
}

export const DisplayCount = (props: CountValuePropsType) => {
    const displayClass = `${props.value === maxValue ? s.red : s.displayCount}`
    return (
        <div className={displayClass}>
            {props.value}
        </div>
    )
}

// `${props.count === 5 ? "red" : "item"}`