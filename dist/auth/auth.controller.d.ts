/// <reference types="passport" />
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    handleLogin(): {
        message: string;
    };
    handleLogout(req: Request, res: Response): void;
    redirect(res: Response): void;
    user(req: Request): {
        success: boolean;
        user: Express.User;
    };
    userStatus(req: Request): {
        message: string;
        user: Express.User;
    } | {
        message: string;
        user?: undefined;
    };
}
