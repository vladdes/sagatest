import Aux from '../../hoc/CAux';
import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
}

const ingredient_prices = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.5,
    bacon: 0.5
}
class BurgerBuilder extends React.Component<any, IBurgerBuilderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        };
    }

    updatePurchaseState = () => {
        const ingredients = {
            ...this.state.ingredients
        };
        
    }
    addIngredientHandler = (type: string) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = ingredient_prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = (type: string) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceAddition = ingredient_prices[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        }

    }

    render() {
        const ingredientsCopy = {
            ...this.state.ingredients
        };
        let disabledInfo: object[] = [];
        
        Object.keys(ingredientsCopy).forEach((item) => {
            disabledInfo[item] = ingredientsCopy[item] <= 0;
        });
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients as IIngredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} 
                                ingredientRemoved={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;