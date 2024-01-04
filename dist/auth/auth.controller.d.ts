/// <reference types="passport" />
import { Request, Response } from 'express';
export declare class AuthController {
    handleLogin(): {
        message: string;
    };
    handleRedirect(res: Response): void;
    user(request: Request): {
        message: string;
        user: Express.User;
    } | {
        message: string;
        user?: undefined;
    };
}
