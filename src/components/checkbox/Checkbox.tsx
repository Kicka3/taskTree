import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from './checkbox.module.scss';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
    id: string;
};

export const Checkbox: FunctionComponent<CheckboxProps> = ( {id, ...props} ) => {
    return (
        <>
            <input
                {...props}
                className={styles.checkbox}
                type='checkbox'
                id={`checkbox-${id}`}
            />
            <label htmlFor={`checkbox-${id}`} className={styles.checkboxLabel} />
        </>
    );
};

