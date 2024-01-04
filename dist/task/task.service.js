"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        const data = await this.prisma.testTask.findUnique({
            where: {
                id: +id
            }
        });
        if (!data)
            throw new common_1.NotFoundException(`Task ${id} not found`);
        return data;
    }
    async getAll() {
        const data = await this.prisma.testTask.findMany();
        return [{ message: 'Get', data }];
    }
    async create(dto) {
        const data = await this.prisma.testTask.create({
            data: {
                name: dto.name,
                age: dto.age
            }
        });
        return [{ message: 'Create', data }];
    }
    async update(id, dto) {
        await this.getById(id);
        const data = await this.prisma.testTask.update({
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
    async delete(id) {
        await this.getById(id);
        const data = await this.prisma.testTask.delete({
            where: {
                id: +id
            }
        });
        return [{ message: 'Delete', data }];
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map