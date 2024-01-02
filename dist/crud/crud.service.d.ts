import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
export declare class CrudService {
    create(createCrudDto: CreateCrudDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCrudDto: UpdateCrudDto): string;
    remove(id: number): string;
}
