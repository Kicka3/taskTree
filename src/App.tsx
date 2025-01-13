import {TodoDetails} from "./components/todoDetails/TodoDetails.tsx";
import {ModalWindow} from "./components/modalWindow/ModalWindow.tsx";
import {TodoList} from "./components/todoList/TodoList.tsx";
import {Header} from "./components/header/Header.tsx";
import {Button} from "./components/button/Button.tsx";
import {FunctionComponent, useState} from 'react';
import todos from "./store/todos.ts";

const App: FunctionComponent = () => {
    const [isModalShown, setIsModalShown] = useState(false);

    function modalWindowToggler() {
        setIsModalShown(prevModalState => !prevModalState);
    }

    console.log("@!#!@#!@#!@#")

    return (
        <>
            <Header modalToggler={modalWindowToggler}/>
            <main className='container main'>
                {
                    isModalShown &&
                   <ModalWindow modalToggler={modalWindowToggler}>
                      <Button
                         btnText='add todo'
                         onClick={() => todos.addTask()}
                      />
                   </ModalWindow>
                }
                <TodoList/>
                <TodoDetails/>
            </main>
            {/*<Footer />*/}
        </>
    );
};

export default App;