import { IsInt, IsString } from 'class-validator';

export class TaskDto {
	id: number;
	isDone: boolean;
	@IsString()
	name: string;
	@IsInt()
	age: number;
}
