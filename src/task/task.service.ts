import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}
	async getAll() {
		const data = await this.prisma.task.findMany();
		return [{ message: 'Get', data }];
	}
	async create(dto: TaskDto) {
		const data = await this.prisma.task.create({
			data: {
				name: dto.name,
				age: dto.age
			}
		});
		return [{ message: 'Create', data }];
	}
	async update(id: string, dto: TaskDto) {
		const data = await this.prisma.task.update({
			where: {
				id: +id
			},
			data: {
				name: dto.name,
				age: dto.age,
				isDone: true
			}
		});
		return [{ message: 'Update', data }];
	}
	async delete(id: string) {
		const data = await this.prisma.task.delete({
			where: {
				id: +id
			}
		});
		return [{ message: 'Delete', data }];
	}
}
