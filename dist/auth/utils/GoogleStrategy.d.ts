import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(accessToken: string, refreshToken: string, profile: Profile): Promise<{
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
export {};
