import * as React from 'react';
import Aux from 'src/hoc/CAux';
import { IIngredients } from './../../../interfaces/GlobalBurgerInterfaces';

interface IOrderSummaryProps {
    ingredients: IIngredients;
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
            <button>Cancel</button>
            <button>Continue</button>
        </Aux>
    );
};

export default OrderSummary;