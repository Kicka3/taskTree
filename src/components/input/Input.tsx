import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from './input.module.scss';

export const Input: FunctionComponent< ComponentPropsWithoutRef<'input'> > = ( {...props} ) => {
    return (
        <input
            {...props}
            className={styles.input}
            type='text'
        />
    );
};

