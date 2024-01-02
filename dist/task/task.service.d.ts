import { TaskDto } from './dto/task.dto';
export declare class TaskService {
    private data;
    getAll(): {
        id: number;
        name: string;
        age: number;
    }[];
    create(dto: TaskDto): {
        id: number;
        name: string;
        age: number;
    }[];
}
