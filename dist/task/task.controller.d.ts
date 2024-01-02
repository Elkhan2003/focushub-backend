import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): {
        id: number;
        name: string;
        age: number;
    }[];
    createTask(dto: TaskDto): {
        id: number;
        name: string;
        age: number;
    }[];
}
