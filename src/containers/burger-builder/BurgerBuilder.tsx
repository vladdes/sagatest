import Aux from '../../hoc/CAux';
import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';
import BuildControls from './../../components/Burger/BuildControls/Buildcontrols';

interface IBurgerBuilderState{
    ingredients: IIngredients;
}

class BurgerBuilder extends React.Component<any, IBurgerBuilderState> {
    constructor(props: any){
        super(props);
        this.state = {
            ingredients: {
                salad: 0, 
                bacon: 0,
                cheese: 0, 
                meat: 0
            }
        };
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients as IIngredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;