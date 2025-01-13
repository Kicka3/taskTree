import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from './textArea.module.scss';

export const TextArea: FunctionComponent< ComponentPropsWithoutRef<'textarea'> > = ( {...props} ) => {
    return (
        <textarea {...props} className={`${styles.input} ${styles.textarea}`} />
    );
};

