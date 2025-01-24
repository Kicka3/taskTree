import {updateParentCompletionStatus} from "../utils/updateParentCompletionStatus.ts";
import {recursionCompleteToggler} from "../utils/tasksTogglerFunctions.ts";
import {recursionFilter} from "../utils/recursionFilter.ts";
import {recursionSearch} from "../utils/recursionSearch.ts";
import {subTaskAdding} from "../utils/subTaskAdding.ts";
import {TodoType} from "../types/todoType.ts";
import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Todos {
    todoArray: TodoType[] = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    activeTask: TodoType | null = null;
    todoTitle = '';
    todoText = '';

    constructor() {
        makeAutoObservable(this);
    }

    titleHandler = (str: string) => {
        this.todoTitle = str;
    }

    textHandler = (str: string) => {
        this.todoText = str;
    }

    addTask = () => {
        if (this.todoTitle.trim().length) {
            this.todoArray.push({
                id: uuidv4(),
                title: this.todoTitle,
                text: this.todoText,
                isCompleted: false,
                subTasks: [],
            });

            localStorage.setItem('todos', JSON.stringify(this.todoArray));
            this.todoTitle = '';
            this.todoText = '';
        }
    }

    addSubtask = (id: string) => {
        if (this.todoTitle.trim().length) {
            const task = {
                id: uuidv4(),
                title: this.todoTitle,
                text: this.todoText,
                isCompleted: false,
                subTasks: [],
            };

            this.todoArray = subTaskAdding(id, this.todoArray, task);
            localStorage.setItem('todos', JSON.stringify(this.todoArray));
            this.todoTitle = '';
            this.todoText = '';
        }
    }

    removeTask = (id: string) => {
        this.todoArray = recursionFilter(id, this.todoArray);
        localStorage.setItem('todos', JSON.stringify(this.todoArray));

        if (!this.todoArray.length) {
            this.activeTask = null;
            localStorage.removeItem('todos');
        }
    }

    completeToggler = (id: string) => {

        //Меняю задачу
        this.todoArray = recursionCompleteToggler(id, this.todoArray);

        //Смотрю на подзадачи
        this.todoArray = updateParentCompletionStatus(this.todoArray);

        //Сохраняю
        localStorage.setItem('todos', JSON.stringify(this.todoArray));
    }

    chooseTask = (id: string) => {
        this.activeTask = recursionSearch(id, this.todoArray);
    }

    closeTask = () => {
        this.activeTask = null;
    };
}

const todos = new Todos();

export default todos;

