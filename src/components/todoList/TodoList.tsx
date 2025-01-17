import {FC} from 'react';
import {observer} from 'mobx-react-lite';
import todos from "../../store/todos.ts";
import {TodoItem} from "../todoItem/TodoItem.tsx";

export const TodoList: FC = observer(() => {
    return (
        <div>
            {todos.todoArray.map(todoItem =>
                    <TodoItem
                        key={todoItem.id}
                        todoItem={todoItem}
                    />
                )
            }
        </div>
    );
});
