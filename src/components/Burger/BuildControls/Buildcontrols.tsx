import * as React from 'react';
import * as constants from '../../../Constants/Constants';
import * as classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: constants.bacon, type: constants.bacon },
    { label: constants.meat, type: constants.meat },
    { label: constants.salad, type: constants.salad },
    { label: constants.cheese, type: constants.cheese }
];
    
const BuildControls = (props: any) => {
    return (
        <div className={classes.BuildControls}>
           {controls.map((control: any, index: number) => {
               return <BuildControl key={control.label + index} label={control.label} type={control.type} />;
           })}
        </div>
    );
};

export default BuildControls;