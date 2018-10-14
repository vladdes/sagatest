import * as React from 'react';
import * as constants from '../../../Constants/Constants';
import * as classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: constants.bacon, type: constants.bacon },
    { label: constants.meat, type: constants.meat },
    { label: constants.salad, type: constants.salad },
    { label: constants.cheese, type: constants.cheese }
];
interface IBuildControlsProps{
    ingredientAdded: Function;
    ingredientRemoved: Function;
    disabled: any[];
    price: number;
}   

const BuildControls = (props: IBuildControlsProps) => {
    return (
        <div className={classes.BuildControls}>
        <div className={classes.InnerWrapper} >
            <p>Price: ${props.price.toFixed(2)}</p>
           {controls.map((control: any, index: number) => {
               
               return <BuildControl key={control.label + index} label={control.label} 
                        ingredientAdded={() => props.ingredientAdded(control.type)} 
                        ingredientRemoved={() => props.ingredientRemoved(control.type)}
                        disabled={ props.disabled[control.type] }
                        />;
           })}
           <button className={classes.orderButton}>Order Now</button>
           </div>
        </div>
    );
};

export default BuildControls;