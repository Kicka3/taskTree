import {CompleteTogglerProps, RecursionProps} from "../utils/utils.ts";
import {TodoType} from "../types/todoType.ts";

export const recursionCompleteToggler: RecursionProps = (id, array) => {
    return array.reduce((arr: TodoType[], item) => {
        if (item.id !== id) {
            arr.push({...item, subTasks: recursionCompleteToggler(id, item.subTasks)});
        } else {
            arr.push({
                ...item,
                isCompleted: !item.isCompleted,
                subTasks: subTasksCompleteToggler(item.subTasks, !item.isCompleted)
            });
        }

        return arr;
    }, []);
};

export const subTasksCompleteToggler: CompleteTogglerProps = (array, state) => {
    return array.reduce((arr: TodoType[], item) => {
        arr.push({
            ...item,
            isCompleted: state,
            subTasks: subTasksCompleteToggler(item.subTasks, state)
        });

        return arr;
    }, []);
};

