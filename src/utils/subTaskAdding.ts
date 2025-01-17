import {SubTaskAddingProps} from "../utils/utils.ts";
import {TodoType} from "../types/todoType.ts";

export const subTaskAdding:SubTaskAddingProps = (id, array, task) => {
    return array.reduce((arr: TodoType[], item) => {
        if (item.id === id) {
            item.subTasks.push(task);
            arr.push(item);
        } else {
            arr.push({...item, subTasks: subTaskAdding(id, item.subTasks, task)});
        }

        return arr;
    }, []);
};

