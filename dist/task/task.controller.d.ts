import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        }[];
    }[]>;
    createTask(dto: TaskDto): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
    updateTask(id: string, dto: TaskDto): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
    deleteTask(id: string): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
}
