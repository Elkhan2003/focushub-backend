import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleAuthGuard } from './utils/Guards';
import * as process from 'process';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}
	@Get('login/google')
	@UseGuards(GoogleAuthGuard)
	handleLogin() {
		return this.authService.handleLogin();
	}

	@Get('callback/google')
	@UseGuards(GoogleAuthGuard)
	handleRedirect(@Res() res: Response) {
		return this.authService.handleRedirect(res);
	}

	@Get('user')
	user(@Req() req: Request) {
		return this.authService.user(req);
	}

	@Get('logout')
	logout(@Req() req: Request, @Res() res: Response) {
		return this.authService.logout(req, res);
	}

	@Get('status')
	userStatus(@Req() req: Request) {
		return this.authService.userStatus(req);
	}
}
