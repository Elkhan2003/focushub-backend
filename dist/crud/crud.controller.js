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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("./crud.service");
const create_crud_dto_1 = require("./dto/create-crud.dto");
const update_crud_dto_1 = require("./dto/update-crud.dto");
let CrudController = class CrudController {
    constructor(crudService) {
        this.crudService = crudService;
    }
    create(createCrudDto) {
        return this.crudService.create(createCrudDto);
    }
    findAll() {
        return this.crudService.findAll();
    }
    findOne(id) {
        return this.crudService.findOne(+id);
    }
    update(id, updateCrudDto) {
        return this.crudService.update(+id, updateCrudDto);
    }
    remove(id) {
        return this.crudService.remove(+id);
    }
};
exports.CrudController = CrudController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crud_dto_1.CreateCrudDto]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crud_dto_1.UpdateCrudDto]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "remove", null);
exports.CrudController = CrudController = __decorate([
    (0, common_1.Controller)('crud'),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
//# sourceMappingURL=crud.controller.js.map