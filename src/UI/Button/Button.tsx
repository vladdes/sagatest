import * as React from 'react';

interface IButton {
    buttonClasses: string;
    isDisabled: boolean;
    buttonValue: string;
    clicked: ((event: React.MouseEvent<HTMLButtonElement>) => void);
}

const Button = (props: IButton) => (
    <button className={props.buttonClasses} disabled={props.isDisabled} onClick={props.clicked}>
        {props.buttonValue}
    </button>
);

export default Button;