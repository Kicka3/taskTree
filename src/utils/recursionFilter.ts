import {RecursionProps} from "../utils/utils.ts";
import {TodoType} from "../types/todoType.ts";

export const recursionFilter:RecursionProps = (id, array) => {
    return array.reduce((arr: TodoType[], item) => {
        if (item.id !== id) {
            arr.push({...item, subTasks: recursionFilter(id, item.subTasks)});
        }

        return arr;
    }, []);
};