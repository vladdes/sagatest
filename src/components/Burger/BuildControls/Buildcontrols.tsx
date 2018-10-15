import * as React from 'react';
import * as constants from '../../../Constants/Constants';
import * as classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Button from 'src/UI/Button/Button';

const controls = [
    { label: constants.salad, type: constants.salad },
    { label: constants.bacon, type: constants.bacon },
    { label: constants.cheese, type: constants.cheese },
    { label: constants.meat, type: constants.meat }
];

interface IBuildControlsProps {
    ingredientAdded(type: string): void;
    ingredientRemoved(type: string): void;
    ordered(): void;
    disabled: any[];
    price: number;
    purchasable: boolean;
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
                        disabled={props.disabled[control.type]}
                    />;
                })}
                <Button isDisabled={!props.purchasable} 
                        buttonClasses={classes.orderButton} 
                        buttonValue="Order Now"
                        clicked={props.ordered}/>
            </div>
        </div>
    );
};

export default BuildControls;