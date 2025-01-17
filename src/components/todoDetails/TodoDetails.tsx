import {FC} from 'react';
import {observer} from 'mobx-react-lite';
import styles from '../../style/todos.module.scss';
import todos from "../../store/todos.ts";
import {Button} from "../button/Button.tsx";


export const TodoDetails: FC = observer(() => {
    const handleClose = () => {
        todos.closeTask();
    }

    return (
        <>
            {todos.activeTask &&
               <div className={styles.todoDetails}>
                  <Button
                     btnText={"Close info"}
                     className={styles.closeButton}
                     onClick={handleClose}
                  />
                  <h2 className='bigHeader'>Task Info</h2>
                  <h3 className='midHeader'>{todos.activeTask.title}</h3>
                  <p>{todos.activeTask.text}</p>
               </div>
            }
        </>
    );
});