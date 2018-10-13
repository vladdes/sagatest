import Aux from '../../hoc/CAux';
import * as React from 'react';
import Burger from 'src/components/Burger/Burger';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';

interface IBurgerBuilderState{
    ingredients: IIngredients;
}

class BurgerBuilder extends React.Component<any, IBurgerBuilderState> {
    constructor(props: any){
        super(props);
        this.state = {
            ingredients: {
                salad: 2, 
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
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;