import {ComponentPropsWithoutRef, FC} from 'react';
import styles from './checkbox.module.scss';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
    id: string;
};

export const Checkbox: FC<CheckboxProps> = ({id, ...props}) => {
    return (
        <>
            <input
                {...props}
                className={styles.checkbox}
                type='checkbox'
                id={`checkbox-${id}`}
            />
            <label htmlFor={`checkbox-${id}`} className={styles.checkboxLabel}/>
        </>
    );
};

