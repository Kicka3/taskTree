import {ComponentPropsWithoutRef, FC} from 'react';

import styles from './textArea.module.scss';

export const TextArea: FC<ComponentPropsWithoutRef<'textarea'>> = ({...props}) => {
    return (
        <textarea {...props} className={`${styles.input} ${styles.textarea}`}/>
    );
};
