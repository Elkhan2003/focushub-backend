import {
	Body,
	Controller,
	Get,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get()
	getTasks() {
		return this.taskService.getAll();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	createTask(@Body() dto: TaskDto) {
		return this.taskService.create(dto);
	}
}
