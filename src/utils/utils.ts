import {TodoType} from "../types/todoType.ts";

export type SubTaskAddingProps = (
    id: string,
    array: TodoType[],
    task: TodoType,
) => TodoType[];

export type RecursionProps = (
    id: string,
    array: TodoType[],
) => TodoType[];

export type SearchProps = (
    id: string,
    array: TodoType[],
) => TodoType | null;

export type CompleteTogglerProps = (
    array: TodoType[],
    state: boolean,
) => TodoType[];