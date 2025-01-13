import { FunctionComponent } from 'react';


import s from './header.module.scss';

type HeaderProps = {
    modalToggler: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ( {modalToggler} ) => {
    return (
        <header className={`container ${s.header}`}>
            <img src={"https://www.alasil.ae/cdn/shop/files/MQH63-1.png?v=1715955181&width=416"} alt='logo' className={s.logo} />
            <h1 className='largeHeader'>ToDo List</h1>
            <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZda1QrYX7H33QfZREuBBZ0GLUUjsz2f8tUQ&s"}
                onClick={modalToggler}
                alt='add todo icon'
                className={s.addIcon}
                tabIndex={0}
            />
        </header>
    );
};