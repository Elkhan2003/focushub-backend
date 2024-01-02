"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCrudDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_crud_dto_1 = require("./create-crud.dto");
class UpdateCrudDto extends (0, mapped_types_1.PartialType)(create_crud_dto_1.CreateCrudDto) {
}
exports.UpdateCrudDto = UpdateCrudDto;
//# sourceMappingURL=update-crud.dto.js.map