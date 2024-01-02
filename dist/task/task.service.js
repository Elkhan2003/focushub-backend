"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
let TaskService = class TaskService {
    constructor() {
        this.data = [
            {
                id: 1,
                name: 'Elcho911',
                age: 20,
                isDone: false
            }
        ];
    }
    getAll() {
        return this.data;
    }
    create(dto) {
        const newId = this.data.reduce((_, task) => task.id, 0) + 1;
        this.data.push({
            id: newId,
            name: dto.name,
            age: dto.age,
            isDone: false
        });
        return this.data;
    }
    update(id) {
        const updateData = this.data.find((item) => item.id === +id);
        updateData.isDone = !updateData.isDone;
        return updateData;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map