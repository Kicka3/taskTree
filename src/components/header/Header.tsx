import {FC} from 'react';
import addIcon from '../../assets/icons/add.svg';
import styles from './header.module.scss';

type HeaderProps = {
    modalToggler: () => void;
}

export const Header: FC<HeaderProps> = ({modalToggler}) => {
    return (
        <header className={`container ${styles.header}`}>
            <h1 className='largeHeader'>To-Do List</h1>
            <img
                src={addIcon}
                onClick={modalToggler}
                alt='add todo icon'
                className={styles.addIcon}
                tabIndex={0}
            />
        </header>
    );
};
