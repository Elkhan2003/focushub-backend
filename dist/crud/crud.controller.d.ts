import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    create(createCrudDto: CreateCrudDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCrudDto: UpdateCrudDto): string;
    remove(id: string): string;
}
