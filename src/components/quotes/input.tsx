import React from 'react';
import { useField } from 'formik';
import { FieldHookConfig } from 'formik/dist/Field';
import * as styles from './input.module.css';

interface CustomAttributes {
    label: string;
    inputType: 'text' | 'textarea'
}

export default function Input(props: FieldHookConfig<string> & CustomAttributes) {
    const [field, meta] = useField(props);
    const inErrorState = meta.touched && meta.error;
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            {
                props.inputType === 'textarea' &&
                (<textarea className={inErrorState ? styles.error : ''} {...field}/>)
            }
            {
                props.inputType === 'text' &&
                (<input type={props.inputType} className={inErrorState ? styles.error : ''} {...field}/>)
            }

            {inErrorState && (<small>{meta.error}</small>)}
        </div>

    );
}
