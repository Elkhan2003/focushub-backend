/// <reference types="passport" />
import { Request, Response } from 'express';
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
    handleLogin(): {
        message: string;
    };
    handleRedirect(res: Response): void;
    user(req: Request): {
        success: boolean;
        user: Express.User;
    };
    logout(req: Request, res: Response): void;
    userStatus(req: Request): {
        message: string;
        user: Express.User;
    } | {
        message: string;
        user?: undefined;
    };
}
