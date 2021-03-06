import * as React from 'react';
import Aux from '../../hoc/CAux';
import * as classes from './Layout.css';
interface ILayoutProps {
    name?: string
    children?: any;
}

const Layout = (props: ILayoutProps): any => {
    return (
        <Aux>

            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;