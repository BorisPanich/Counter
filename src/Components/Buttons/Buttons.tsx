import React from 'react';

type ButtonsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export function Buttons(props: ButtonsType) {

    return <button className={props.disabled === true ? 'wrapperButton' : ''}
                   onClick={props.onClick}
                   disabled={props.disabled}
    >
        {props.title}
    </button>
}


