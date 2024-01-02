import { TaskDto } from './dto/task.dto';
export declare class TaskService {
    private data;
    getAll(): {
        id: number;
        name: string;
        age: number;
        isDone: boolean;
    }[];
    create(dto: TaskDto): {
        id: number;
        name: string;
        age: number;
        isDone: boolean;
    }[];
    update(id: string): {
        id: number;
        name: string;
        age: number;
        isDone: boolean;
    };
    delete(id: string): {
        id: number;
        name: string;
        age: number;
        isDone: boolean;
    };
}
