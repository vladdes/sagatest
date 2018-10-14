import Aux from '../../hoc/CAux';
import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from './../../UI/Modal/Modal';
import OrderSummary from 'src/components/Burger/OrderSummary/OrderSummary';

interface IBurgerBuilderState {
    ingredients: IIngredients;
    totalPrice: number;
    purchasable: boolean;
    purchasing: boolean;
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
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        };
    }
    purchaseHandler = () => {
        this.setState({purchasing: !this.state.purchasing});
    }
    updatePurchaseState = (updatedIngredients: IIngredients) => {
       
        const sum: number = Object.keys(updatedIngredients)
                    .map(igKey => {
                        return updatedIngredients[igKey];
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    }, 0);
        this.setState({purchasable: sum > 0});
    
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
        this.updatePurchaseState(updatedIngredients);
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
            this.updatePurchaseState(updatedIngredients);
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
                
                <Modal showModal={this.state.purchasing} closeModal={ this.purchaseHandler }>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls ingredientAdded={ this.addIngredientHandler } 
                                ingredientRemoved={ this.removeIngredientHandler }
                                disabled={ disabledInfo }
                                price={ this.state.totalPrice }
                                purchasable={ this.state.purchasable } 
                                ordered={ this.purchaseHandler }
                                />
            </Aux>
        );
    }
}

export default BurgerBuilder;