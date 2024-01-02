"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const common_1 = require("@nestjs/common");
let CrudService = class CrudService {
    create(createCrudDto) {
        return 'This action adds a new crud';
    }
    findAll() {
        return `This action returns all crud`;
    }
    findOne(id) {
        return `This action returns a #${id} crud`;
    }
    update(id, updateCrudDto) {
        return `This action updates a #${id} crud`;
    }
    remove(id) {
        return `This action removes a #${id} crud`;
    }
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)()
], CrudService);
//# sourceMappingURL=crud.service.js.map