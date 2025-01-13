import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import s from './button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    btnText: string;
};

export const Button: FunctionComponent<ButtonProps> = ( {btnText, ...props} ) => {
    return (
        <button {...props} className={s.button}>
            {btnText}
        </button>
    );
};
