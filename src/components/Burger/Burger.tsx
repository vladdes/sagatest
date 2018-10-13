import * as React from 'react';
import * as classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';
import { IIngredients } from '../../interfaces/GlobalBurgerInterfaces';
import * as types from '../../Constants/Constants'

interface IBurgerBuilderProps{
    ingredients: IIngredients;
}

const Burger = (props: IBurgerBuilderProps) => {
    return (
        <div className={classes.burger}>
            <Ingredients type={types.bread_top}/>
            <Ingredients type={types.bacon}/>
            <Ingredients type={types.cheese}/>
            <Ingredients type={types.meat}/>
            <Ingredients type={types.salad}/>
            <Ingredients type={types.bread_bottom}/>
        </div>
    );
};

export default Burger;