import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import styles from './modalWindow.module.scss';
import todos from '../../store/todos';
import {Input} from "../input/Input.tsx";
import {TextArea} from "../textArea/ TextArea.tsx";
import {Button} from "../button/Button.tsx";


type ModalProps = {
    children: React.ReactNode;
    modalToggler: () => void;
}

export const ModalWindow: FC<ModalProps> = observer(({children, modalToggler}) => {
    return (
        <div className={styles.blackout}>
            <div className={`${styles.flexColumn} ${styles.controls}`}>
                <h1 className={styles.title}>Новая задача</h1>
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
               <div className={styles.actions}>
                   {children}
                   <Button
                       className={styles.closeBtn}
                       onClick={modalToggler}
                       btnText='Close'
                   />
               </div>
            </div>
        </div>
    );
});