import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
	private data = [
		{
			name: 'Elcho911',
			age: 20
		}
	];
	getAll() {
		return this.data;
	}
	create(dto: TaskDto) {
		this.data.push({
			name: dto.name,
			age: dto.age
		});
		return this.data;
	}
}
