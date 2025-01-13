import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import todos from "../../store/todos.ts";
import { TodoItem } from "../../components/todoItem/TodoItem.tsx";

export const TodoList:FunctionComponent = observer(() => {
    return (
        <div>
            {
                todos.todoArray.map(todoItem =>
                    <TodoItem
                        key={todoItem.id}
                        todoItem={todoItem}
                    />
                )
            }
        </div>
    );
});
