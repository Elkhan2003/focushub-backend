import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
	private data = [
		{
			id: 1,
			name: 'Elcho911',
			age: 20,
			isDone: false
		}
	];
	getAll() {
		return this.data;
	}
	create(dto: TaskDto) {
		const newId = this.data.reduce((_, task) => task.id, 0) + 1;
		this.data.push({
			id: newId,
			name: dto.name,
			age: dto.age,
			isDone: false
		});
		return this.data;
	}
	update(id: string) {
		const updateData = this.data.find((item) => item.id === +id);
		updateData.isDone = !updateData.isDone;
		return updateData;
	}
}
