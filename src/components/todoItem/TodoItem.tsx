import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';

// import addIcon from '../assets/icons/add.svg';
// import deleteIcon from '../assets/icons/delete.svg';
// import chevronIcon from '../assets/icons/chevron.svg';

import s from './todoItem.module.scss';
import {TodoType} from "../../types/todoType.ts";
import {ModalWindow} from "../../components/modalWindow/ModalWindow.tsx";
import {Button} from "../../components/button/Button.tsx";
import todos from "../../store/todos.ts";
import {Checkbox} from "../../components/checkbox/Checkbox.tsx";


type TodoItemProps = {
    todoItem: TodoType;
};

export const TodoItem:FunctionComponent<TodoItemProps> = observer(( {todoItem} ) => {
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
            {
                isModalShown &&
               <ModalWindow modalToggler={modalWindowToggler}>
                  <Button
                     btnText='add todo'
                     onClick={() => todos.addSubtask(id)}
                  />
               </ModalWindow>
            }
            <div className={s.todoItem}>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZwspa_1ibFKPxO4JJ1f7VGNOzSv2cIZMdw&s"}
                    alt=''
                    className={isSubTasksShown ? `${s.icons} ${s.rotated}` : s.icons}
                    onClick={subTasksToggler}
                />
                <h3
                    className={`midHeader ${s.title}`}
                    onClick={() => todos.chooseTask(id)}
                >
                    {title}
                </h3>
                <img
                    src={"https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg"}
                    alt='add subtask'
                    className={s.icons}
                    onClick={modalWindowToggler}
                />
                <Checkbox
                    id={id}
                    checked={isCompleted}
                    onChange={() => todos.completeToggler(id)}
                />
                <img
                    src={"https://e7.pngegg.com/pngimages/29/45/png-clipart-delete-key-logo-button-text-rectangle-thumbnail.png"}
                    alt='delete task'
                    className={s.icons}
                    onClick={() => todos.removeTask(id)}
                />
            </div>
            {
                subTasks.length > 0 &&
               <div className={isSubTasksShown ? s.subTasks : s.hide}>
                   {subTasks.map(subTask => <TodoItem key={subTask.id} todoItem={subTask} />)}
               </div>
            }
        </>
    );
});
