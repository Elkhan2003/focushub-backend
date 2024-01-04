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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const moment = require("moment");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validateUser(profile) {
        console.log('AuthService');
        try {
            const profileData = await this.prisma.user.findFirst({
                where: {
                    login: profile._json.email
                }
            });
            if (!profileData) {
                console.log('User not found! - Creating...');
                return await this.prisma.user.create({
                    data: {
                        auth: 'Google',
                        firstName: profile._json.given_name || '',
                        lastName: profile._json.family_name || '',
                        login: profile._json.email || '',
                        password: '',
                        photo: profile._json.picture || '',
                        createdAt: moment().utcOffset(6).format('YYYY-MM-DD HH:mm:ss Z'),
                        updatedAt: moment().utcOffset(6).format('YYYY-MM-DD HH:mm:ss Z')
                    }
                });
            }
            else {
                console.log('User found!');
                return profileData;
            }
        }
        catch (err) {
            console.log(`${err}`);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map