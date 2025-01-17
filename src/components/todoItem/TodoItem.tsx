import {FC, useState} from 'react';
import {observer} from 'mobx-react-lite';
import addIcon from '../../assets/icons/add.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import chevronIcon from '../../assets/icons/chevron.svg';
import styles from '../../style/todos.module.scss';
import {TodoType} from "../../types/todoType.ts";
import {ModalWindow} from "../modalWindow/ModalWindow.tsx";
import {Button} from "../button/Button.tsx";
import todos from "../../store/todos.ts";
import {Checkbox} from "../checkbox/Checkbox.tsx";

type TodoItemProps = {
    todoItem: TodoType;
};

export const TodoItem: FC<TodoItemProps> = observer(({todoItem}) => {
    const {id, title, isCompleted, subTasks} = todoItem;
    const [isModalShown, setIsModalShown] = useState(false);
    const [isSubTasksShown, setIsSubTasksShown] = useState(false);

    function modalWindowToggler() {
        setIsModalShown(prevModalState => !prevModalState);
    }

    function subTasksToggler() {
        setIsSubTasksShown(prevSubTasks => !prevSubTasks);
    }

    return (
        <>
            {isModalShown &&
               <ModalWindow modalToggler={modalWindowToggler}>
                  <Button
                     btnText='add todo'
                     onClick={() => todos.addSubtask(id)}
                  />
               </ModalWindow>
            }
            <div className={styles.todoItem}>
                <Checkbox
                    id={id}
                    checked={isCompleted}
                    onChange={() => todos.completeToggler(id)}
                />
                <img
                    src={chevronIcon}
                    alt=''
                    className={isSubTasksShown ? `${styles.icons} ${styles.rotated}` : styles.icons}
                    onClick={subTasksToggler}
                />
                <h3
                    className={`midHeader ${styles.title}`}
                    onClick={() => todos.chooseTask(id)}
                >
                    {title}
                </h3>
                <img
                    src={addIcon}
                    alt='add subtask'
                    className={styles.icons}
                    onClick={modalWindowToggler}
                />
                <img
                    src={deleteIcon}
                    alt='delete task'
                    className={styles.icons}
                    onClick={() => todos.removeTask(id)}
                />
            </div>
            {subTasks.length > 0 &&
               <div className={isSubTasksShown ? styles.subTasks : styles.hide}>
                   {subTasks.map(subTask => <TodoItem key={subTask.id} todoItem={subTask}/>)}
               </div>
            }
        </>
    );
});