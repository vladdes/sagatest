import * as React from 'react';
import * as classes from './BuildControl.css';

interface IBuildControlProps{
    label: string;
    ingredientAdded: any
    ingredientRemoved: any;
    disabled: boolean;
}
const BuildControl = (props: IBuildControlProps) => {
    
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.ingredientRemoved} disabled={props.disabled} >Less</button>
            <button className={classes.More} onClick={props.ingredientAdded}>More</button>
        </div>
    );
}

export default BuildControl;