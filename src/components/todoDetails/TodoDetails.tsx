import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import todos from "../../store/todos.ts";

export const TodoDetails:FunctionComponent = observer(() => {
    return (
        <>
            {
                todos.activeTask &&
               <div>
                  <h2 className='bigHeader'>Task Info</h2>
                  <h3 className='midHeader'>{todos.activeTask.title}</h3>
                  <p>{todos.activeTask.text}</p>
               </div>
            }
        </>
    );
});

