import {ComponentPropsWithoutRef, FC, ReactNode} from 'react';
import s from './button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    btnText?: string;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {btnText, children, ...rest} = props;

    return (
        <button {...rest} className={`${s.button} ${rest.className || ''}`}>
            {children || btnText}
        </button>
    );
};