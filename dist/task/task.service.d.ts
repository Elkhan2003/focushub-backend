import { TaskDto } from './dto/task.dto';
export declare class TaskService {
    private data;
    getAll(): {
        name: string;
        age: number;
    }[];
    create(dto: TaskDto): {
        name: string;
        age: number;
    }[];
}
