import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './container.module.css';

export default function ModalContainer(props: { children: JSX.Element }) {
    const container =
        <>
            <div className={styles.overlay}/>
            <div role="dialog" className={styles.dialog}>
                {props.children}
            </div>
        </>;
    return ReactDOM.createPortal(container, document.body);
}
