import * as React from 'react';
import * as classes from './Backdrop.css';

interface IBackdropProps{
    clicked(): void;
    showModal: boolean;
}

const Backdrop = (props: IBackdropProps) => (
    props.showModal ?
        <div className={classes.Backdrop} onClick={props.clicked}>
          
        </div> : null
);

export default Backdrop;