import React from 'react';
import s from '../App/App.module.css';

type ButtonsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export function Buttons(props: ButtonsType) {

    return <button className={props.disabled === true ? 'btnDisabled' : ''}
                   onClick={props.onClick}
                   disabled={props.disabled}
    >
        {props.title}
    </button>
}


