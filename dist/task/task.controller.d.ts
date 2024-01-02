import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): {
        name: string;
        age: number;
    }[];
    createTask(dto: TaskDto): {
        name: string;
        age: number;
    }[];
}
