import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
	@Get('login/google')
	@UseGuards(GoogleAuthGuard)
	handleLogin() {
		return { message: 'Google Authentication' };
	}

	@Get('callback/google')
	@UseGuards(GoogleAuthGuard)
	handleRedirect(@Res() res: Response) {
		return res.redirect(
			process.env.NODE_ENV === 'development'
				? `${process.env.FRONTEND_BASE_URL_DEV}/api/v1/auth/status`
				: `${process.env.FRONTEND_BASE_URL_PROD}/api/v1/auth/status`
		);
	}

	@Get('status')
	user(@Req() request: Request) {
		if (request.user) {
			return { message: 'Authenticated', user: request.user };
		} else {
			return { message: 'Not Authenticated' };
		}
	}
}
