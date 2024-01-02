import { IsInt, IsString } from 'class-validator';

export class TaskDto {
	id: number;
	@IsString()
	name: string;
	@IsInt()
	age: number;
}
