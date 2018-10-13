import * as React from 'react';
import * as classes from './Ingredients.css';
import * as types from '../../../Constants/Constants';
interface IngredientsProps{
    type: string;
}
const Ingredients = (props: IngredientsProps) => {
    let ingredient = null;
    switch(props.type){
        case(types.bread_bottom): {
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        }
        case (types.bread_top): {
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        }
        case (types.meat): {
            ingredient = <div className={classes.Meat}></div>
            break;
        }
        case (types.salad): {
            ingredient = <div className={classes.Salad}></div>
            break;
        }
        case (types.bacon): {
            ingredient = <div className={classes.Bacon}></div>
            break;
        }
        case (types.cheese): {
            ingredient = <div className={classes.Cheese}></div>
            break;
        }
        default:
    }
    return ingredient;
};

export default Ingredients;