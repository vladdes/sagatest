import * as React from 'react';
import Aux from 'src/hoc/CAux';
import { IIngredients } from './../../../interfaces/GlobalBurgerInterfaces';
import Button from 'src/UI/Button/Button';
import * as classes from './OrderSummary.css';

interface IOrderSummaryProps {
    ingredients: IIngredients;
    closeModal(): void;
}

const OrderSummary = (props: IOrderSummaryProps) => {
    const ingredientsSummary = props.ingredients
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your chosen ingredients:</p>
            <ul>
                {Object.keys(ingredientsSummary).map((item) => {
                    return <li key={item}>{item}: {ingredientsSummary[item]}</li>
                })}
            </ul>
            <p>Continue to Checkout?</p>
            <Button isDisabled={ false } buttonValue="Cancel" buttonClasses={ classes.buttonOrder } clicked={ props.closeModal }/>
            <Button isDisabled={ false } buttonValue="Order" buttonClasses={ classes.buttonOrder }  clicked={ props.closeModal }/>
        </Aux>
    );
};

export default OrderSummary;