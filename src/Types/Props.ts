import { Task } from "./Task";

export type PropsTask = {
    task: Task;
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export type PropsTasks = {
    tasks: Task[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}