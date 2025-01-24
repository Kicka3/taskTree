import {TodoType} from "../types/todoType.ts";

export const updateParentCompletionStatus = (array: TodoType[]): TodoType[] => {
    return array.map((item) => {
        if (item.subTasks.length > 0) {
            const updatedSubTasks = updateParentCompletionStatus(item.subTasks);

            const areAllSubTasksCompleted = updatedSubTasks.every(
                (subTask) => subTask.isCompleted
            );

            return {
                ...item,
                subTasks: updatedSubTasks,
                isCompleted: areAllSubTasksCompleted,
            };
        }

        return item;
    });
};
