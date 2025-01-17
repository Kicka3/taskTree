import {useState} from 'react';
import {Header} from "../header/Header.tsx";
import {ModalWindow} from "../modalWindow/ModalWindow.tsx";
import {Button} from "../button/Button.tsx";
import todos from "../../store/todos.ts";
import {TodoList} from "../todoList/TodoList.tsx";
import {TodoDetails} from "../todoDetails/TodoDetails.tsx";
import s from "./mainPage.module.scss";


export const MainPage = () => {
    const [isModalShown, setIsModalShown] = useState(false);

    function modalWindowToggler() {
        setIsModalShown(prevModalState => !prevModalState);
    }

    const addTask = () => {
        todos.addTask();
        setIsModalShown(false);
    }

    return (
        <div className={s.wrapper}>
            <Header modalToggler={modalWindowToggler}/>
            <main className={s.container}>
                {isModalShown &&
                   <ModalWindow modalToggler={modalWindowToggler}>
                      <Button
                         btnText='add todo'
                         onClick={addTask}
                      />
                   </ModalWindow>
                }
                <TodoList/>
                <TodoDetails/>
            </main>
        </div>
    );
};
