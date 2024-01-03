import { TaskDto } from './dto/task.dto';
import { PrismaService } from '../database/prisma.service';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        }[];
    }[]>;
    create(dto: TaskDto): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
    update(id: string, dto: TaskDto): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
    delete(id: string): Promise<{
        message: string;
        data: {
            id: number;
            name: string;
            age: number;
            isDone: boolean;
        };
    }[]>;
}
