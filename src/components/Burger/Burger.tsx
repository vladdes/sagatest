import * as React from 'react';
import * as classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';
import * as types from '../../Constants/Constants'

interface IBurgerBuilderProps {
    ingredients: IIngredients;
}

const Burger = (props: IBurgerBuilderProps) => {
    const iGArray = props.ingredients;
    let transformedIngredients = Object.keys(iGArray)
        .map(igKey => {
            return ingredients(iGArray, igKey);
        })
        .reduce((arr, el) =>{
            return arr.concat(el);
        } , []);
    if(transformedIngredients.length === 0){
        transformedIngredients = [<p key="noIG">Please add ingredients</p>];
    }
    return (

        <div className={classes.burger}>
            <Ingredients type={types.bread_top} />
            {transformedIngredients}
            <Ingredients type={types.bread_bottom} />
        </div>
    );
};

export default Burger;

function ingredients(iGArray: IIngredients, igKey: string) {
    var elements: JSX.Element[] = Array.apply(null, Array(iGArray[igKey]));
    elements.forEach((value, i) => {
        elements[i] = <Ingredients key={igKey + i} type={igKey} />;
    })
   
    return elements;
}