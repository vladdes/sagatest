import * as React from 'react';
import * as classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from 'src/hoc/CAux';
interface IModalProps {
    showModal: boolean;
    children?: any;
    closeModal(): void;
}


const Modal = (props: IModalProps) => (
    <Aux>
        <Backdrop showModal={props.showModal} clicked={props.closeModal} />
        <div className={classes.Modal} style={{
            transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.showModal ? 1 : 0
        }}>
            {props.children}
        </div>
    </Aux>

);

export default Modal;