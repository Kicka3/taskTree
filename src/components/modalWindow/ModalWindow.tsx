import {FunctionComponent} from 'react';

import styles from './modalWindow.module.scss';
import {Input} from "../input/Input.tsx";
import {TextArea} from "../textArea/ TextArea.tsx";
import {Button} from "../button/Button.tsx";
import todos from "../../store/todos.ts";


type ModalProps = {
    children: JSX.Element | JSX.Element[];
    modalToggler: () => void;
}

export const ModalWindow: FunctionComponent<ModalProps> = ({children, modalToggler}) => {
    return (
        <div className={styles.blackout}>
            <div className={`${styles.flexColumn} ${styles.controls}`}>
                <div className={styles.flexColumn}>
                    <Input
                        value={todos.todoTitle}
                        onChange={(e) => todos.titleHandler(e.target.value)}
                        placeholder='Todo title...'
                    />
                    <TextArea
                        value={todos.todoText}
                        onChange={(e) => todos.textHandler(e.target.value)}
                        placeholder='Todo text...'
                    />
                </div>
                {children}
                <Button
                    btnText='close window'
                    onClick={modalToggler}
                />
            </div>
        </div>
    );
};

