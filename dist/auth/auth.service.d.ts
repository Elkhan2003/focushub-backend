import { PrismaService } from '../database/prisma.service';
import { Profile } from 'passport-google-oauth20';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    validateUser(details: Profile): void;
}
