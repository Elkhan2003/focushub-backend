import { PrismaService } from '../database/prisma.service';
import { Profile } from 'passport-google-oauth20';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    validateUser(profile: Profile): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        role: import("@prisma/client").$Enums.UserRole;
        auth: string;
        login: string;
        password: string;
        isActive: boolean;
        photo: string;
        phone: string;
        isPhoneVerified: boolean;
        traffic: string;
        createdAt: string;
        updatedAt: string;
    }>;
    findUser(id: number): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        role: import("@prisma/client").$Enums.UserRole;
        auth: string;
        login: string;
        password: string;
        isActive: boolean;
        photo: string;
        phone: string;
        isPhoneVerified: boolean;
        traffic: string;
        createdAt: string;
        updatedAt: string;
    }>;
}
