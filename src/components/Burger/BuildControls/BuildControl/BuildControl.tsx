import * as React from 'react';
import * as classes from './BuildControl.css';
import Button from 'src/UI/Button/Button';

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
            <Button buttonClasses={classes.Less} clicked={props.ingredientRemoved} isDisabled={props.disabled} buttonValue="Less" />
            <Button buttonClasses={classes.More} clicked={props.ingredientAdded} isDisabled={false} buttonValue="More" />
           
        </div>
    );
}

export default BuildControl;