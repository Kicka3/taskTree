import {ComponentPropsWithoutRef, FC} from 'react';

import styles from './input.module.scss';

export const Input: FC<ComponentPropsWithoutRef<'input'>> = ({...props}) => {
    return (
        <input
            {...props}
            className={styles.input}
            type='text'
        />
    );
};

